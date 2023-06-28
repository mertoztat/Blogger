const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const { default: mongoose } = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();
app.use(express.json());

// Connected To MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);
app.use("/server/posts", postRoute);

// Server Running Log
app.listen("5000", () => {
  console.log("Backend is running 5000");
});
