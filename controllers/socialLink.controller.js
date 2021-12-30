const models = require('../models');

// @desc get all socials
// @route GET /socials
exports.getSocials =(req, res) => {
  models.SocialLink.findAll()
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

// @desc get social
// @route GET /social/:id
exports.getSocial = (req, res) => {
  const id = req.params.id;

  models.SocialLink.findByPk(id)
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

// @desc edit a socials
// @route PUT /socials
exports.editSocials = (req, res) => {
  let updatedSocials = {};

  updatedSocials = {
    facebook_link: req.body.facebook_link,
    facebook_link_enabled: req.body.facebook_link,
    twitter_link: req.body.twitter_link,
    twitter_link_enabled: req.body.twitter_link,
    linkedin_link: req.body.linkedin_link,
    linkedin_link_enabled: req.body.linkedin_link,
    youtube_link: req.body.youtube_link,
    youtube_link_enabled: req.body.youtube_link,
    instagram_link: req.body.instagram_link,
    instagram_link_enabled: req.body.instagram_link,
    phone_number: req.body.phone_number,
    email_address: req.body.email_address,
  };

  models.SocialLink.update(updatedSocials, { where: { id: 1 } })
    .then((result) => {
      res.status(201).json({
        message: 'Socials updated successfully',
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
