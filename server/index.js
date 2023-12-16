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
const cors = require("cors");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// Connected To MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log("connect mongodb error", err));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use(cors());
// Allow specific origin(s)
app.use(
  cors({
    origin: "https://blogger-ecru.vercel.app",
  })
);

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// Server Running Log
app.listen("4000", () => {
  console.log("Backend is running 4000");
});
