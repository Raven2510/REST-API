const express = require('express')
const app = express()
const {envConfig} = require('./src/config/envar')

const env = envConfig()

app.use(express.json())


app.listen(env.PORT || 4000, () => {
    console.log(`Server started listening to port ${env.PORT || 4000}`)
})