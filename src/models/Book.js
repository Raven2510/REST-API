const mongoose = require('mongoose')

//collection schema
const schema = mongoose.Schema({
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: [{
        type: String,
        required: true
    }],
    published_at: {
        type: Date,
        default: Date.now,
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

module.exports = mongoose.model('books', schema)