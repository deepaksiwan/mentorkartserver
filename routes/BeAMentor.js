const express = require('express');
const { addBeAMentor } = require('../controllers/BeAMentor.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// ADD BEAMENTOR
router.post('/', upload.single(''), addBeAMentor);
router.post('/BeAMentor',addBeAMentor );

module.exports = router;
