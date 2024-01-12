const mongoose = require('mongoose');





mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
// mongoose.connect("mongodb+srv://admin-tosif:Test123@cluster0.7rdhg14.mongodb.net/ecommerce",{useNewUrlParser:true});

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;