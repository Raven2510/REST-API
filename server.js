const express = require('express')
const app = express()
const {envConfig} = require('./src/config/envar')
const {dbConnect} = require('./src/config/database')

dbConnect()
const env = envConfig()

app.use(express.json())
app.use('/books', require('./src/routes/book'))

app.listen(env.PORT || 4000, () => {
    console.log(`Server started listening to port ${env.PORT || 4000}`)
})