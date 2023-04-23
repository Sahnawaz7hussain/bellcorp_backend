const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = async (req, res, next) => {
  try {
    let tokenPresent = req.headers.authorization || null;
    if (tokenPresent) {
      let token = tokenPresent.split(" ")[1];
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.json("Ivalid token");

        //  console.log("token: ", token);
        // console.log(decoded); // bar
        req.body.userId = decoded.userId;
        next();
      });
    } else {
      res.json({ message: "Unauthorized" });
    }
  } catch (err) {
    res.json({ message: "invalid request Please login again." });
  }
};

module.exports = { authentication };
