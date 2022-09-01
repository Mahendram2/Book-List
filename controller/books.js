/* 
    Routes make up the controller code in an MVC Structured app
    It's the roter object that get exported
    */

const express = require('express');
const router = express.Router();
const Book = require('../models/book');


// Seed Route
router.get('/books/seed',(req,res)=>{
    const data = require('../data.json') 
    Book.deleteMany({}, (err,result) =>{
        Book.insertMany(data, (err,result) =>{
        res.redirect('/books')
    })
})
    
})


// mount route - INDUCES

// Index
router.get('/', (req,res)=>{
    Book.find({}, (err,books) =>{
        res.render('index.ejs', {
            'books': books
        })
    })
})


// New
router.get('/new', (req,res) =>{
    res.render('new.ejs')
})

// Delete
router.delete('/:id', (req,res) =>{
    Book.findByIdAndDelete(req.params.id, (err,deletedBook) =>{
        console.log('Deleted Book' ,deletedBook)
        res.redirect('/books');
    })
})


// Update
router.put('/:id',(req,res)=>{
    req.body.completed = !!req.body.completed

    Book.findByIdAndUpdate(req.params.id, req.body, (err, oldBookVersion) => {
        res.redirect('/books/' + req.params.id);
    })
})


// create
router.post('/', (req,res) => {
    req.body.completed = !!req.body.completed

    Book.create(req.body, (err, createdBook) => {
        console.log('Error :', err)
        res.redirect('/books');
    })
});


// Edit
router.get('/:id/edit', (req,res)=>{
    Book.findById(req.params.id, (err, foundBook) =>{
        res.render('edit.ejs', {book: foundBook})
    });
    
})


// Show
router.get('/:id', (req, res) => {
    Book.findById(req.params.id, (err, foundBook) => {
        res.render('show.ejs', { book: foundBook })
    });
});

module.exports = router;