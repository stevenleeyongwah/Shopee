const mongoose = require('mongoose')
const { isEmail, isAlphanumeric } = require('validator');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
    unique: true,
    validate: [isAlphanumeric, 'Name can contain only letters and numbers'],
    minlength: [6, 'Minimum name length is 6 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  registerDate: {
    type: Date,
    default: Date.now
  }
})

// fire a function before doc saved to db
UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
UserSchema.statics.login = async function(email, password) {

  if (email === "") {
    throw Error('Please enter an email');
  }
  if (password === "") {
    throw Error('Please enter a password');
  }
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

module.exports = mongoose.model('user', UserSchema)
