const express = require('express');

const {
  getWebsiteContents,
  getWebsiteContent,
  addWebsiteContent,
  deleteWebsiteContent,
  editWebsiteContent,
} = require('../controllers/websitecontent.controllers');
const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL WEBSITE CONTENT
router.get('/', getWebsiteContents);

// GET ALL WEBSITE CONTENT
router.get('/:id', getWebsiteContent);

// DELETE WEBSITE CONTENT
router.delete('/:id', deleteWebsiteContent);

//ADD WEBSITE CONTENT
router.post('/', upload.single(''), addWebsiteContent);

// EDIT WEBSITE CONTENT
router.post('/:id', upload.single(''), editWebsiteContent);

module.exports = router;
