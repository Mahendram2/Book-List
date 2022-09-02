const express= require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const user = require('../models/user');

// GET Sign up page
router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

// POST Sign up Create
router.post('/signup', (req,res) => {
    // 1) encrypt: hash/salt req.body.passowrd
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    // 2) Save the user with hashed/salted password to the database
    user.create(req.body, (err, user) => {
        console.log('Created user:', user);
        res.redirect('/books')
    })
    // 3) redirected to book index
})

// GET Login Page

// POST Login

// GET Logout

module.exports = router;