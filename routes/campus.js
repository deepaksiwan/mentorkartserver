const express = require('express');
const { addCampus } = require('../controllers/campus.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// ADD CAMPUS
router.post('/', upload.single(''), addCampus);
router.post('/campus', addCampus);


module.exports = router;
