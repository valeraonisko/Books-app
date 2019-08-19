const express = require('express');
const session = require('express-session');
const {logIn, logOut, auth} = require('./auth');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(session({
    secret: 'just testing'
}));

app.post('/api/login', logIn);
app.post('/api/logout', logOut);

app.use(auth);

const books = require('./books');
app.use('/api/books', books);

app.use((req, res, next) => {
    res.send('Not found!');
});

const port = process.env.PORT || 5000;

// app.listen(3001);
app.listen(port);
