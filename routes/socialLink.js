const express = require('express');
const {
  getSocials,
  getSocial,
  editSocials,
} = require('../controllers/socialLink.controller');
const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL SOCIALS
router.get('/', getSocials);

// GET ALL SOCIALS
router.get('/:id', getSocial);

// EDIT SOCIALS
router.post('/', upload.single(''), editSocials);

module.exports = router;
