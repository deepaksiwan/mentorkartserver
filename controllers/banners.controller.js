const models = require('../models');

// @desc get all banners
// @route GET /banners
exports.getBanners = (req, res) => {
  models.Banner.findAll()
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

// @desc get single banner
// @route GET /banners/:id
exports.getBanner = (req, res) => {
  const id = req.params.id;

  models.Banner.findByPk(id)
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

// @desc create a banner
// @route POST /banners
exports.addBanner = (req, res) => {
  console.log(req);
  const result = JSON.parse(JSON.stringify(req.body));

  const banner = {
    banner_image: req.file.filename,
    banner_title: result.BannerTitle,
    banner_bg_color: result.BannerBgColor,
    banner_title_color: result.BannerTitleColor,
    button: result.EnableButton,
    button_text: result.ButtonText,
    button_action_url: result.ButtonActionUrl,
  };
  console.log(req.body);

  models.Banner.create(banner)
    .then((result) => {
      res.status(201).json({
        message: 'Banner created successfully',
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

// @desc delete a banner
// @route DELETE /banners
exports.deleteBanner = (req, res) => {
  const id = req.params.id;
  models.Banner.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'Banner deleted successfully',
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

// @desc edit a banner
// @route PUT /banners
exports.editBanner = (req, res) => {
  const id = req.params.id;
  const result = JSON.parse(JSON.stringify(req.body));
  let updatedBanner = {};

  if (req.file) {
    updatedBanner = {
      banner_image: req.file.filename,
      banner_title: result.BannerTitle,
      banner_bg_color: result.BannerBgColor,
      banner_title_color: result.BannerTitleColor,
      button: result.EnableButton,
      button_text: result.ButtonText,
      button_action_url: result.ButtonActionUrl,
    };
  } else {
    updatedBanner = {
      banner_title: result.BannerTitle,
      banner_bg_color: result.BannerBgColor,
      banner_title_color: result.BannerTitleColor,
      button: result.EnableButton,
      button_text: result.ButtonText,
      button_action_url: result.ButtonActionUrl,
    };
  }

  models.Banner.update(updatedBanner, { where: { id: id } })
    .then((result) => {
      res.status(201).json({
        message: 'Banner updated successfully',
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
