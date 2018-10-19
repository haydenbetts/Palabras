const express = require('express');
const router = express.Router();

router
    .get('/articles', (req, res) => res.send('hello from articles!'))

router
    .get('/users/:id/words', (req, res) => res.send('hello from get words!'))
    .post('/users/:id/words', (req, res) => res.send('hello from post words!'))
    .put('/users/:id/words', (req, res) => res.send('hello from update words!'))
    .delete('/users/:id/words/:id', (req, res) => res.send('hello from delete articles!'))

module.exports = router;