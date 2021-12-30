const express = require('express');
const {
  getOrgs,
  addOrgs,
  deleteOrgs,
} = require('../controllers/orgs.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL NEWS
router.get('/', getOrgs);

// DELETE NEWS
router.delete('/:id', deleteOrgs);

//ADD NEWS
router.post('/', upload.single('OrgsImage'), addOrgs);

module.exports = router;
