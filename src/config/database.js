const mongoose = require('mongoose')
const {envConfig} = require('./envar')

const env = envConfig()

module.exports.dbConnect = async () => {
    try{
        await mongoose.connect(env.DB_URL)
        console.log("Connected to database.")
    } catch(err){
        console.error(err)
    }
}