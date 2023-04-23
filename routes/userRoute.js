const express = require("express");
const { Login } = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/login", Login);

module.exports = { userRoute };
