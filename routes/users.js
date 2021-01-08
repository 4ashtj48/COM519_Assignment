const { response } = require('express');
const express = require('express');
const router = express.Router();


//login page
router.get('/login',(req,res) =>res.render('Login'));


//Register
router.get('/register',(req,res) =>res.render('Register'));



//Register Handle
//handles the post request
router.post('/register', (req,res) =>{
console.log(req.body)
res.send('hello');

});



module.exports = router;