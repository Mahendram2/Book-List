// Deoendencies
const express = require('express');
const mongoose = require('mongoose');

// Initalize
const app = express();

// configure setting
require('dotenv').config();
const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;
const db = mongoose.connection;

// Connect to mongodb
mongoose.connect(DATABASE_URI);
// add mongoDB connected and error event listners
db.on('connected', () =>{
    console.log('connected to MongoDB');
})
db.on('error', (err) =>{
    console.log('MongoDB Error:' + err.message);
})


// mount middleware

// mount route


// listen
app.listen(PORT, () =>{
    console.log('Port:' , PORT)
})