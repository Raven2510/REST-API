
function _get(req, res){
    res.send('Get authors')
}

function _create(req, res){
    res.send('Create authors')
}

function _update(req, res){
    res.send('Update authors')
}

function _delete(req, res){
    res.send('Delete authors')
}

module.exports = {
    _get,
    _create,
    _update,
    _delete
}