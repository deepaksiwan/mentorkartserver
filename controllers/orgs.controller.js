const models = require('../models');

// @desc get all orgs
// @route GET /orgs
exports.getOrgs = (req, res) => {
  models.Orgs.findAll()
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

// @desc create a orgs
// @route POST /orgs
exports.addOrgs = (req, res) => {
  const orgs = {
    orgs_img: req.file.filename,
  };

  models.Orgs.create(orgs)
    .then((result) => {
      res.status(201).json({
        message: 'Orgs created successfully',
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

// @desc delete a orgs
// @route DELETE /orgs
exports.deleteOrgs = (req, res) => {
  const id = req.params.id;
  models.Orgs.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'Orgs deleted successfully',
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
