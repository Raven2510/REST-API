const mongoose = require('mongoose')
const {envConfig} = require('./envar')

//called the envConfig() function to return the env object.
const env = envConfig()

//exports the asynchronous function dbConnect()
//dbConnect() function enables the connection from the mongodb database.
module.exports.dbConnect = async () => {
    try{
        await mongoose.connect(env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Connected to database.")
    } catch(err){
        console.error(err)
    }
}