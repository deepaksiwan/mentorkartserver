const express = require('express');
const { addNewsletter } = require('../controllers/newsletter.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

//ADD BANNER
router.post('/', upload.single(''), addNewsletter);

module.exports = router;
