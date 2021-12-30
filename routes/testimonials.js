const express = require('express');
const {
  getTestimonials,
  getTestimonial,
  addTestimonial,
  deleteTestimonial,
  editTestimonial,
} = require('../controllers/testimonials.controller');

const upload = require('../helpers/image-uploader');

const router = express.Router();

// GET ALL TESTIMONIALS
router.get('/', getTestimonials);

// GET TESTIMONIALS BY ID
router.get('/:id', getTestimonial);

// DELETE TESTIMONIAL
router.delete('/:id', deleteTestimonial);

// EDIT TESTIMONIAL
router.post('/:id', upload.single('TestimonialImage'), editTestimonial);

//ADD TESTIMONIAL
router.post('/', upload.single('TestimonialImage'), addTestimonial);

module.exports = router;
