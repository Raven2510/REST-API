//get the authors
function _get(req, res){
    res.send('Get authors')
}

//creates a new author
function _create(req, res){
    res.send('Create authors')
}

//updates an author
function _update(req, res){
    res.send('Update authors')
}

//delete an author
function _delete(req, res){
    res.send('Delete authors')
}

module.exports = {
    _get,
    _create,
    _update,
    _delete
}