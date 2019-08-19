const client = require('./db');

function checkAuth(login, password, validCallback, invalidCallback) {
    client.query('SELECT * FROM users WHERE login = $1 AND password_hash = MD5($2)',
        [login, password], (err, result) => {
        if (result.rowCount > 0) {
            validCallback();
        } else {
            invalidCallback();
        }
    });
}

function logIn(req, res) {
    checkAuth(req.body.login, req.body.password, () => {
        req.session.login = req.body.login;
        res.send('ok');
    }, () => {
        res.status(401).send('Invalid credentials');
    });
}

function logOut(req, res) {
    if (req.session.login) {
        delete req.session.login;
    }
    res.send('ok');
}

function auth(req, res, next) {
    if (req.session.login) {
        next();
    } else {
        res.status(401).send('Not authorized');
    }
}

module.exports = {
    logIn,
    logOut,
    auth
};