const models = require('../models');

// @desc get all websitecontent
// @route GET /websitecontent
exports.getWebsiteContents = (req, res) => {
  models.WebsiteContent.findAll()
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
// @desc get websitecontent
// @route GET /websitecontent/:id
exports.getWebsiteContent = (req, res) => {
  const id = req.params.id;

  models.WebsiteContent.findByPk(id)
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
// @desc create a websitecontent
// @route POST /websitecontents
exports.addWebsiteContent = (req, res) => {
  // console.log(req);
  const result = JSON.parse(JSON.stringify(req.body));
  // console.log(result);
  let websitecontent = {};
  // console.log(req.body);
  websitecontent = {
    field_name: result.field_name,
    field_data: result.field_data,
  };

  models.WebsiteContent.create(websitecontent)
    .then((result) => {
      res.status(201).json({
        message: 'WebsiteContent created successfully',
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

// @desc delete a websitecontent
// @route DELETE /websitecontent
exports.deleteWebsiteContent = (req, res) => {
  const id = req.params.id;
  models.WebsiteContent.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'WebsiteContent deleted successfully',
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

// @desc edit a websitecontent
// @route PUT /websitecontent
exports.editWebsiteContent = (req, res) => {
  const id = req.params.id;

  const result = JSON.parse(JSON.stringify(req.body));
  let updatedWebsiteContent = {};
  // console.log(req.body);
  updatedWebsiteContent = {
    field_data: result.field_data,
  };

  models.WebsiteContent.update(updatedWebsiteContent, { where: { id: id } })
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
