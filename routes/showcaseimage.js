const express = require('express');
const {
  getShowcaseImages,
  addShowcaseImage,
  deleteShowcaseImage,
} = require('../controllers/showcaseimage.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL PARTNERS
router.get('/', getShowcaseImages);

// DELETE PARTNER
router.delete('/:id', deleteShowcaseImage);

//ADD PARTNER
router.post('/', upload.single('ShowcaseImage'), addShowcaseImage);

module.exports = router;
