const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// REGISTER
// Create New User

router.post("/register", async (req, res) => {
  try {
    // brcypt kullanarak passwordu hashleyip newUser a hashlenmiş passwordu gönderiyoruz.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  try {
    // UserSchemadaki userı buluyoruz.
    const user = await User.findOne({ username: req.body.username });
    // // user bulunamadıysa
    if (!user) {
      return res.status(400).json("Wrong Credentials");
    }

    // // hashlenmiş password ile gönderilen passwordu compare et.

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }

    const { password, ...others } = user._doc;

    // passwordu destruct ediyoruz. Böylece logine othersdaki diğer objeleri gönderiyoruz
    // böylece pass login infoda gözükmemiş oluyor
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
