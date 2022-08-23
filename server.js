const express = require('express')
const app = express()
const {envConfig} = require('./src/config/envar')
const {dbConnect} = require('./src/config/database')

//executes the dbConnect() to start the database.
dbConnect()

//gets the return env object from envConfig() function.
const env = envConfig()

//middlewares
app.use(express.json())

//api routes
app.use('/authors', require('./src/routes/author'))
app.use('/books', require('./src/routes/book'))

//server
app.listen(env.PORT || 4000, () => {
    console.log(`Server started listening to port ${env.PORT || 4000}`)
})