const monoose = require("mongoose");
require("dotenv").config();
const connection = monoose.connect(process.env.MONGO_URL);

module.exports = { connection };
