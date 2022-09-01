const mongoose = require('mongoose');
const Schema = mongoose.Schema
// a singluar reprresention of our data

// step 1
const bookSchema = new Schema({ // Schema is a construtor
    title: {type:String, required: true},
    author: {type:String, required:true},
    completed: Boolean
}, {timestamps: true}); // time:true proviedes creatAt and updateAt feild in our document

module.exports=mongoose.model('Book',bookSchema)