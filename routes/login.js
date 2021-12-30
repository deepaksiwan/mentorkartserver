const express = require('express');
const { login } = require('../controllers/login.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

//ADD LOGIN
router.post('/', upload.single(''), login);

module.exports = router;
