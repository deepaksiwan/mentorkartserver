const express = require('express');
const {
  getSocials,
  getSocial,
  addSocials,
  deleteSocials,
  editSocial,
} = require('../controllers/socials.controller');
const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL SOCIALS
router.get('/', getSocials);

// GET ALL SOCIALS
router.get('/:id', getSocial);

// DELETE SOCIALS
router.delete('/:id', deleteSocials);

//ADD SOCIALS
router.post('/', upload.single(''), addSocials);

// EDIT SOCIALS
router.post('/:id', upload.single(''), editSocial);

module.exports = router;
