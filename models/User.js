const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
    //date now
  }
});

const User = mongoose.model('User', UserSchema);
//pass in user schema

module.exports = User;
//export to use in other files