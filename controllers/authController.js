const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const config = require('config')

// handle errors
const handleErrors = (err) => {
  let errors = { name: '', email: '', password: '' };

  // duplicate email error
  if (err.code === 11000) {
    console.log(err.message)
    if (err.message.includes("name")) {
      errors.name = 'that name is already registered';
    }
    if (err.message.includes("email")) {
      errors.email = 'that email is already registered';
    }

    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const secretKey = config.get('jwtSecret')

const createToken = (id) => {
  return jwt.sign({ id }, secretKey, {
    expiresIn: maxAge
  });
};

module.exports.user = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) throw Error('No users exist');
    res.json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
}

module.exports.signup_post = async (req, res) => {
  let { name, email, password } = req.body;

  try {
    // Save user data into database
    const user = await User.create({ name, email, password });

    // Create token based on user id
    const token = createToken(user._id);

    // Return cookie and data back to user
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  }
  catch(err) {
    // Handle errors
    const errors = handleErrors(err);

    // Return error response back to user
    res.status(400).json({ errors });
  }

}

module.exports.login_post = async (req, res) => {
  let { email, password } = req.body;
  let errors = { generalError: '', email: '', password: '' };

  try {
    if (email === "" || password === "") {
      if (email === "") errors.email = 'Please enter an email'
      if (password === "") errors.password = 'Please enter a password'
      throw Error();
    }

    // Attempt to login user
    const user = await User.findOne({ email });

    if (!user) {
      errors.generalError = "Your account and/or password is incorrect, please try again"
      throw Error();
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      errors.generalError = "Your account and/or password is incorrect, please try again"
      throw Error();
    }

    // Create token based on user id
    const token = createToken(user._id);

    // Return cookie and data back to user
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  }
  catch (err) {
    // Return error response back to user
    res.status(400).json({ errors });
  }

}
