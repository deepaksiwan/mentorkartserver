const express = require('express');
const {
  getAdvertisements,
  addAdvertisement,
  deleteAdvertisement,
} = require('../controllers/ads.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL PARTNERS
router.get('/', getAdvertisements);

// DELETE PARTNER
router.delete('/:id', deleteAdvertisement);

//ADD PARTNER
router.post('/', upload.single('AdsImage'), addAdvertisement);

module.exports = router;
