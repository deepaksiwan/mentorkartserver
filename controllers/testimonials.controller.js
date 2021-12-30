const models = require('../models');

// @desc get all testimonials
// @route GET /testimonials
exports.getTestimonials = (req, res) => {
  models.Testimonial.findAll()
    .then((result) => {
      res.status(200).json({
        message: 'Success',
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: 'Something went wrong',
        data: error,
      });
    });
};

// @desc get single testimonial
// @route GET /testimonials/:id
exports.getTestimonial = (req, res) => {
  const id = req.params.id;

  models.Testimonial.findByPk(id)
    .then((result) => {
      res.status(200).json({
        message: 'Success',
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        data: error,
      });
    });
};

// @desc create a testimonial
// @route POST /testimonials
exports.addTestimonial = (req, res) => {
  const result = JSON.parse(JSON.stringify(req.body));

  const testimonial = {
    testimonial_image: req.file.filename,
    text: result.TestimonialText,
    author: result.TestimonialAuthor,
    post: result.AuthorPost,
  };
  console.log(req.body);

  models.Testimonial.create(testimonial)
    .then((result) => {
      res.status(201).json({
        message: 'Testimonial created successfully',
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        data: error,
      });
    });
};
    

// @desc delete a testimonial
// @route DELETE /testimonials
exports.deleteTestimonial = (req, res) => {
  const id = req.params.id;
  models.Testimonial.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'Testimonial deleted successfully',
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        data: error,
      });
    });
};

// @desc edit a testimonial
// @route PUT /testimonials
exports.editTestimonial = (req, res) => {
  const result = JSON.parse(JSON.stringify(req.body));

  const id = req.params.id;
  let updatedTestimonial = {};

  if (req.file) {
    updatedTestimonial = {
      testimonial_image: req.file.filename,
      text: result.TestimonialText,
      author: result.TestimonialAuthor,
      post: result.AuthorPost,
    };
  } else {
    updatedTestimonial = {
      text: result.TestimonialText,
      author: result.TestimonialAuthor,
      post: result.AuthorPost,
    };
  }

  models.Testimonial.update(updatedTestimonial, { where: { id: id } })
    .then((result) => {
      res.status(201).json({
        message: 'Testimonial updated successfully',
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        data: error,
      });
    });
};
