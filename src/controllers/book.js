
function _get(req, res){
    res.send('Get books')
}

function _create(req, res){
    res.send('Create books')
}

function _update(req, res){
    res.send('Update books')
}

function _delete(req, res){
    res.send('Delete books')
}

module.exports = {
    _get,
    _create,
    _update,
    _delete
}