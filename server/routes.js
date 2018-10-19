const express = require('express');
const router = express.Router();
const userController = require('./userController.js')
const wordController = require('./wordController.js')
const articleController = require('./articleController.js')

router
    .get('/articles', articleController.get)

router
    .get('/users', userController.post)
    .post('/users', userController.post)
    .delete('/users', userController.delete)

router
    .get('/words', wordController.get)
    .post('/words', wordController.post)
    .delete('/words', wordController.delete)

module.exports = router;