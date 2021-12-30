const models = require('../models');

// @desc get all Social
// @route GET /social
exports.getSocials = (req, res) => {
  models.Social.findAll()
    .then((result) => {
      res.status(200).json({
        message: 'Success',
        data: result,
      });
    })
    .catch ((error) => {
    res.status(400).json({
      message: 'Something went wrong',
      data: error,
    });
  });

};

// @desc get social
// @route GET /social/:id
exports.getSocial = (req, res) => {
  const id = req.params.id;

  models.Social.findByPk(id)
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
// @desc create a socials
// @route POST /socials
exports.addSocials = (req, res) => {
  // console.log(req);
  const result = JSON.parse(JSON.stringify(req.body));
  // console.log(result);
  let socials = {};
  // console.log(req.body);
  socials = {
    field_name: result.field_name,
    field_data: result.field_data,
  };

  models.Social.create(socials)
    .then((result) => {
      res.status(201).json({
        message: 'Socials created successfully',
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Something went wrong',
        data: error,
      });
    });
};

// @desc delete a socials
// @route DELETE /socials
exports.deleteSocials = (req, res) => {
  const id = req.params.id;
  models.Social.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'Socials deleted successfully',
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

// @desc edit a Social
// @route PUT /Social
exports.editSocial = (req, res) => {
  const id = req.params.id;

  const result = JSON.parse(JSON.stringify(req.body));
  let updatedSocial = {};
  // console.log(req.body);
  updatedSocial = {
    field_data: result.field_data,
  };

  models.Social.update(updatedSocial, { where: { id: id } })
    .then((result) => {
      res.status(201).json({
        message: 'Website Content updated successfully',
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
