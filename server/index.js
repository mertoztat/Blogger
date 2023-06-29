const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const { default: mongoose } = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

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

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/server/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);
app.use("/server/posts", postRoute);
app.use("/server/categories", categoryRoute);

// Server Running Log
app.listen("5000", () => {
  console.log("Backend is running 5000");
});
