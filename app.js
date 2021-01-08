const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();
const mongoose = require('mongoose')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');



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

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );


//connect to MongoDB
mongoose.connect(db, { userNewUrlParse: true})



  //   { useNewUrlParser: true ,useUnifiedTopology: true}
  // )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
//returns promise

//Bodyparser
app.use(express.urlencoded({extended: false}));

// Passport Config
require('./config/passport')(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});







