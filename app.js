const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();
const mongoose = require('mongoose')


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//routes- pages.
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
const PORT = 8080;
app.listen(PORT,console.log(`localhost:${PORT}`));

//DB Config
const db = require('./config/keys').MongoURI;

//connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
//returns promise

//Bodyparser
app.use(express.urlencoded({extended: false}));




