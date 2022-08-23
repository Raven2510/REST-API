const Book = require('../models/Book')

//get the books
async function _get(req, res){
    try{
        const data = await Book.find((req.body.title) ? {
                title: {
                    $regex: `.*${req.body.title}.*`,
                    $options: 'i'
                }
            } : {})

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
        const {author_id, title, description, genre} = req.body
        
        //checks if either one or all of the properties are defined
        if(!(title || description || genre)) throw new Error("Please enter the valid inputs.")
        
        //checks if author_id exists from the request body
        if(!author_id) return res.sendStatus(401)

        const format = { 
            author_id,
            updated_at: Date.now()
        }

        //checks if properties are defined
        if(title) format.title = title
        if(description) format.description = description
        if(genre) format.genre = genre

        const data = await Book.findOneAndUpdate({ _id: req.params.id}, format)

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