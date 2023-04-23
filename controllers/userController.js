const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../models/userModel");
const secret = process.env.SECRET;

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUserPresent = await UserModel.findOne({ email });
    if (isUserPresent) {
      const token = generateToken(isUserPresent._id);
      // send response as login success with new token;
      res.status(200).json({ message: "Login Success", token });
    } else {
      // create new user;
      const newUser = new UserModel(req.body);
      await newUser.save();
      const token = generateToken(newUser._id);
      res.json({ message: "Login success", token });
    }
  } catch (err) {
    res.json({ err: err.message });
  }
};

module.exports = { Login };

const generateToken = (userId) => {
  var token = jwt.sign({ userId: userId }, secret);
  return token;
};
