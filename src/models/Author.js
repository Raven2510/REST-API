const mongoose = require('mongoose')

//collection schema
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['admin', 'author'],
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        immutable: true,
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = mongoose.model('authors', schema)