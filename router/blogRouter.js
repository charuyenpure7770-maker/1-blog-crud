const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController.js");

router.get("/", blogController.sendBlog);
router.get("/:id",blogController.sendSingleBlog);
router.post("/",blogController.createBlog);
router.patch("/:id",blogController.updateBlog);
router.delete("/:id",blogController.deleteBlog);

module.exports = router;
