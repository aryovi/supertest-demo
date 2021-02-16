const express = require('express')
const router = express.Router()

router.get('/books', (req, res) => {
    return res.json('all books');
})

router.post('/books', (req, res) => {
    const { title, author } = req.body;
    if (title && author) {
        return res.status(201).json('book created');
    } else {
        return res.status(404).json('book not created');
    }
})

router.get("/books/:id", (req, res) => {
    if (req.params.id === '001') {
        return res.status(200).json('book found');
    } else {
        return res.status(404).json('book not found');
    }
});

module.exports = router