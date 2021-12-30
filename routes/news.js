const express = require('express');
const {
  getNews,
  addNews,
  deleteNews,
} = require('../controllers/news.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL NEWS
router.get('/', getNews);

// DELETE NEWS
router.delete('/:id', deleteNews);

//ADD NEWS
router.post('/', upload.single('NewsImage'), addNews);

module.exports = router;
