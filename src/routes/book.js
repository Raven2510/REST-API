const express = require('express')
const router = express.Router()
const book = require('../controllers/book')

//get and create endpoints
router.route('/')
    .get(book._get)
    .post(book._create)

//update and delete endpoints
router.route('/:id')
    .put(book._update)
    .delete(book._delete)

module.exports = router