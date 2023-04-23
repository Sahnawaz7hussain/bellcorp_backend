const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connection } = require("./config/db");
const { userRoute } = require("./routes/userRoute");
const { itemRoute } = require("./routes/itemRoute");
const { recipeRoute } = require("./routes/recipeRoute");
const { authentication } = require("./middleware/authentication");

const port = process.env.PORT || 8088;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running....");
});
app.use("/user", userRoute);
app.use(authentication);
app.use("/item", itemRoute);
app.use("/recipe", recipeRoute);

app.listen(port, async () => {
  try {
    console.log("connecting with DATABASE");
    await connection;
    console.log("connected with DATABASE");
    console.log(`server running at http://localhost:${port}`);
  } catch (err) {
    console.log({ message: "DATABASE CONNECTION FAILED", err: err.message });
  }
});
