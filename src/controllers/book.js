const Book = require('../models/Book')

//get the books
async function _get(req, res){
    try{
        const get = req.body

        const data = await Book.find(get)
        if(data.length == 0) return res.sendStatus(404)

        res.status(200).json(data)
    } catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//creates a new book
async function _create(req, res){
    try{
        const {
            author_id,
            title,
            description,
            genre
        } = req.body

        if(!(author_id && title && description && genre)) throw new Error("Please enter the valid inputs.")

        const data = await Book.create({
            author_id,
            title,
            description,
            genre
        })
        
        if(data.length == 0) return res.sendStatus(404)

        res.status(201).json(data)
    } catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//updates a book
async function _update(req, res){
    try{
        const edit = req.body

        if(!(author_id && title && description && genre)) throw new Error("Please enter the valid inputs.")
        
        const data = await Book.findAndUpdate({ _id: req.params.id}, edit)

        if(data.length == 0) return res.sendStatus(404)

        res.status(200).json(data)
    } catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//deletes a book
async function _delete(req, res){
    try{
        const data = await Book.findOneAndDelete({ _id: req.params.id })

        res.status(200).json(data)
    } catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

module.exports = {
    _get,
    _create,
    _update,
    _delete
}