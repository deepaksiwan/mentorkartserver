const models = require('../models');

// @desc get all Advertisements
// @route GET /Advertisements
exports.getAdvertisements = (req, res) => {
  models.Advertisement.findAll()
    .then((result) => {
      console.log(result);
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





// @desc create a Advertisement
// @route POST /Advertisements
exports.addAdvertisement = (req, res) => {
  const result = JSON.parse(JSON.stringify(req.body));

  const advertisement = {
    ad_image: req.file.filename,
    ad_url: result.ad_url,
  };
  // console.log(JSON.parse(JSON.stringify(req.body)));

  // res.send(advertisement);

  models.Advertisement.create(advertisement)
  
    .then((result) => {
      res.status(201).json({
        message: 'Advertisement created successfully',
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


// @desc delete a Advertisement
// @route DELETE /Advertisements
exports.deleteAdvertisement = (req, res) => {
  const id = req.params.id;
  models.Advertisement.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'Advertisement deleted successfully',
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
