const express = require('express')
const router = express.Router()
const author = require('../controllers/author')

router.route('/')
    .get(author._get)
    .post(author._create)

router.route('/:id')
    .put(author._update)
    .delete(author._delete)

module.exports = router
