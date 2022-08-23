module.exports.envConfig = () => {
    require('dotenv').config()
    const {env} = process
    return env
}