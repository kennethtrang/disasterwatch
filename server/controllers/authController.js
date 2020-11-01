const User = require('../models/user');

const authController = {
  signUp: async (details) => {
    try {
      const {
        email, password, city, state,
      } = details;

      const matchFound = await User.findOne({ email }).exec();
      if (matchFound) throw new Error('Email already registered');

      const newUser = new User({
        email,
        password,
        city,
        state,
      });
      console.log('newUser => ', newUser);

      const user = await newUser.save();
      console.log('user: ', user);
      return user;
    } catch (error) {
      return error;
    }
  },
};

module.exports = authController;
