// Deoendencies
const express = require('express')

// configure setting
require('dotenv').config()

const PORT = process.env.PORT

// Initalize
const app = express()

// Connect to mongodb

// mount middleware

// mount route


// listen
app.listen(PORT, () =>{
    console.log('Port:' , PORT)
})