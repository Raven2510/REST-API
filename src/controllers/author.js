const Author = require('../models/Author')

//get the authors
async function _get(req, res){
    try{
        const {name, username} = req.body

        let format = {}

        if(name){
            format.name = {
                $regex: `.*${name}.*`,
                $options: 'i'
            }
        }

        if(username) {
            format.username = {
                $regex: `.*${username}.*`,
                $options: 'i'
            }
        }

        const data = await Author.find(format)

        if(data.length == 0) return res.sendStatus(404)

        res.status(200).json(data)
    } catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//creates a new author
async function _create(req, res){
    try{
        const {name, username, email, password} = req.body

        if(!(name && username && email && password)) throw new Error('Please enter the valid inputs.')

        const isExist = await Author.find({ username })

        if(isExist.length > 0) throw new Error('Username already exist.')

        const data = await Author.create({
            name,
            username,
            email,
            password
        })

        if(data.length == 0) return res.sendStatus(404)

        res.status(200).json(data)
    } catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//updates an author
async function _update(req, res){
    try{
        const {name, username, password} = req.body
        
        //checks if either one or all of the properties are defined
        if(!(name || username || password)) throw new Error("Please enter the valid inputs.")
        
        //checks if author_id exists from the request body
        if(!req.params.id) return res.sendStatus(401)

        //checks if properties are defined
        const format = {}
        if(name) format.name = name
        if(username) format.username = username
        if(password) format.password = password

        const data = await Author.findOneAndUpdate({ _id: req.params.id }, format)

        if(data.length == 0) return res.sendStatus(404)

        res.status(200).json(data)
    } catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//delete an author
async function _delete(req, res){
    try{
        const data = await Author.findOneAndDelete({ _id: req.params.id })

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