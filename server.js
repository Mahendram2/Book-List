// Deoendencies
const express = require('express');
const mongoose = require('mongoose');
const booksRouter = require('./controller/books');
const userRouter = require('./controller/users');
const methodOverride = require('method-override');
const expressSession = reequire('express-session');

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
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Mout router/controller
app.use('/books',booksRouter);
app.use(userRouter);
// listen
app.listen(PORT, () =>{
    console.log('Port:' , PORT)
});

/* 

    The Entire Edit and Update Process

    0) Provide a button for the user to click on to edit a book
        0.1) Use the id of the book to find the book document in database using findById.
    1) Navigate the user to an edit page with the edit form with book details
    2) User completes the edit form using POST method with the _method=PUT query param and submit
    3) Use the form data to update the book
        3.1) Find the book document in the database again, and use findByIdAndUpdate
        to update the book
    4) Redirect the user back to the show page


*/
