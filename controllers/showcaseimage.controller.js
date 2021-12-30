const models = require('../models');

// @desc get all ShowcaseImages
// @route GET /ShowcaseImages
exports.getShowcaseImages = (req, res) => {
  models.ShowcaseImage.findAll()
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

// @desc create a ShowcaseImage
// @route POST /ShowcaseImages
exports.addShowcaseImage = (req, res) => {
  const result = JSON.parse(JSON.stringify(req.body));

  const ShowcaseImage = {
    image: req.file.filename,
    url: result.url,
  };

  models.ShowcaseImage.create(ShowcaseImage)
    .then((result) => {
      res.status(201).json({
        message: 'ShowcaseImage created successfully',
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

// @desc delete a ShowcaseImage
// @route DELETE /ShowcaseImages
exports.deleteShowcaseImage = (req, res) => {
  const id = req.params.id;
  models.ShowcaseImage.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'ShowcaseImage deleted successfully',
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
