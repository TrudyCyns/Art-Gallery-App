const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'A user must have a first name'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'A user must have a last name'],
  },
  Email: {
    type: String,
    trim: true,
    required: 'Please enter a Valid Email',
    unique: true,
    lowercase: true,
  },
  Password: {
    type: String,
    required: [true, 'A user must have a password'],
    minlength: [6, 'Password must be 6 or more characters.'],
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

// Method to retrieve user for login (returns only Email and Password)
User.findByEmailForLogin = async (email) => {
  return User.findOne({ Email: email }).select('Email Password').exec();
};

module.exports = User;
