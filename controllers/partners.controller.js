const models = require('../models');

// @desc get all partners
// @route GET /partners
exports.getPartners = (req, res) => {
  models.Partner.findAll()
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

// @desc create a partner
// @route POST /partners
exports.addPartner = (req, res) => {
  const partner = {
    partners_img: req.file.filename,
  };

  models.Partner.create(partner)
    .then((result) => {
      res.status(201).json({
        message: 'Partner created successfully',
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

// @desc delete a partner
// @route DELETE /partners
exports.deletePartner = (req, res) => {
  const id = req.params.id;
  models.Partner.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'Partner deleted successfully',
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
