const express = require('express');
const router = express.Router();
const client = require('./db');

router.get('/', (req, res) => {
    let orderField;
    switch (req.query.order) {
        case 'title':
            orderField = 'booktitle';
            break;
        case 'author':
            orderField = 'bookauthor';
            break;
        case 'description':
            orderField = 'bookdescription';
            break;
        case 'rating':
            orderField = 'rating';
            break;
        default:
            orderField = 'id';
    }
    client.query(`SELECT * FROM books ORDER BY ${orderField} ${req.query.desc !== undefined ? 'DESC' : ''}`, (err, result) => {
        res.json(result.rows);
    });
});

router.get('/:bookId(\\d+)', (req, res) => {
    client.query('SELECT * FROM books WHERE id = $1',
        [req.params.bookId], (err, result) => {
        if (result.rows.length === 0) {
            res.status(404).send('Book not found');
        } else {
            res.json(result.rows[0]);
        }
    });
});

router.post('/', (req, res) => {
    client.query('INSERT INTO books (booktitle, bookauthor, bookdescription, rating) VALUES ($1, $2, $3, $4) RETURNING id',
        [req.body.title, req.body.author, req.body.description, req.body.rating], (err, result) => {
            // console.log(req.body);
            res.json(result.rows[0]);
        });
});

module.exports = router;
