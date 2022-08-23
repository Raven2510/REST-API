
function _get(req, res, next){
    res.send('Get books')
}

function _create(req, res, next){
    res.send('Create books')
}

function _update(req, res, next){
    res.send('Update books')
}

function _delete(req, res, next){
    res.send('Delete books')
}

module.exports = {
    _get,
    _create,
    _update,
    _delete
}