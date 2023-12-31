const router = require("express").Router();
const Category = require("../models/Category");

// Create Category
router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All Categories
router.get("/", async (req, res) => {
  try {
    // categoryi bul
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
