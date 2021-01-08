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
const {name, email, password, password2} = req.body;

//error array
let errors = [];

//validation- check fields
if(!name || !email || !password || !password2){
    errors.push({msg: 'Please fill in all fields'});
}
//validation- check passwords match
if(password !== password2){
   errors.push({ mesg: 'Passwords do not match'}) 
}
// 6 character min
if(password.length < 6){
    errors.push({msg : 'Password should be at least 6 chars'})
}

if (errors.length >0) {
    res.render('register',{
    errors,
    name,
    email,
    password,
    password2
//passing back in input
    });
}
else{   
     res.send('pass');

}

});



module.exports = router;