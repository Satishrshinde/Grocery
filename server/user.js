const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  number: Number
});

const User = model('user', UserSchema);
module.exports = User