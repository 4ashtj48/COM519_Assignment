const express = require('express');
const expressLayouts = require('express-eje-layouts')
const app = express();


// EJS
//app.use(expressLayouts);
app.set('view engine', 'ejs');

//routes- pages.
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
const PORT = 8080;
app.listen(PORT,console.log(`localhost:${PORT}`));







