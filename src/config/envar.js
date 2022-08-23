//imported the dotenv module
//configure the environment variables from .env
module.exports.envConfig = () => {
    require('dotenv').config()
    const {env} = process
    return env
}