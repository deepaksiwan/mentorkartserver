const express = require('express');
const {
  getBanners,
  getBanner,
  addBanner,
  deleteBanner,
  editBanner,
} = require('../controllers/banners.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL BANNERS
router.get('/', getBanners);

// GET BANNERS BY ID
router.get('/:id', getBanner);

// DELETE BANNER
router.delete('/:id', deleteBanner);

// EDIT BANNER
router.post('/:id', upload.single('BannerImage'), editBanner);

//ADD BANNER
router.post('/', upload.single('BannerImage'), addBanner);

module.exports = router;
