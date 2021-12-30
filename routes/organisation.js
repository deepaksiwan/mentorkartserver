const express = require('express');
const { addOrganisation } = require('../controllers/organisation.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// ADD organisation
router.post('/', upload.single(''), addOrganisation);

module.exports = router;
