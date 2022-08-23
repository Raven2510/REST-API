//get the books
function _get(req, res){
    res.send('Get books')
}

//creates a new book
function _create(req, res){
    res.send('Create books')
}

//updates a book
function _update(req, res){
    res.send('Update books')
}

//deletes a book
function _delete(req, res){
    res.send('Delete books')
}

module.exports = {
    _get,
    _create,
    _update,
    _delete
}