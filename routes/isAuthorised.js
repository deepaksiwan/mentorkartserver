const express = require('express');
const { isAuthorised } = require('../controllers/isAuthorised.controller');

const { verifyJWT } = require('../helpers/verifyJWT');

const router = express.Router();

//ADD LOGIN
router.get('/', verifyJWT, isAuthorised);

module.exports = router;
