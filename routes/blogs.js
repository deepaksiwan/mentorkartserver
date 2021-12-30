const express = require('express');
const {
  getBlogs,
  getBlog,
  addBlog,
  deleteBlog,
  editBlog,
} = require('../controllers/blogs.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL BLOGS
router.get('/', getBlogs);

// GET BLOGS BY ID
router.get('/:id', getBlog);

// DELETE BLOG
router.delete('/:id', deleteBlog);

// EDIT BLOG
router.post('/:id', upload.single('BlogImage'), editBlog);

//ADD BLOG
router.post('/', upload.single('BlogImage'), addBlog);

module.exports = router;
