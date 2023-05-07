const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { User } = require("../../models");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log('avatar', user)

  if (!user) {
    throw ErrorHandler(401, "Email or password is wrong");
  }

  // if (!user.verify) {
  //   throw ErrorHandler(401, "Please verify your email")
  // }
  const { SECRET_KEY } = process.env;

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

  const hashPassword = await bcrypt.compare(password, user.password);

  if (!hashPassword) {
    throw ErrorHandler(401, "Email or password is wrong");
  }

  await User.findByIdAndUpdate(user._id, { token });

  const { subscription, avatarURL } = user;
  console.log('avatar', avatarURL)
  res.status(201).json({ token, avatarURL, user: { email, subscription } });
};


module.exports = {
    login: ctrlWrapper(login)
}