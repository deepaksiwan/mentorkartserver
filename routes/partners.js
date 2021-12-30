const express = require('express');
const {
  getPartners,
  addPartner,
  deletePartner,
} = require('../controllers/partners.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL PARTNERS
router.get('/', getPartners);

// DELETE PARTNER
router.delete('/:id', deletePartner);

//ADD PARTNER
router.post('/', upload.single('PartnerImage'), addPartner);

module.exports = router;
