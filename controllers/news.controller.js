const models = require('../models');

// @desc get all news
// @route GET /news
exports.getNews = (req, res) => {
  models.News.findAll()
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

// @desc create a news
// @route POST /news
exports.addNews = (req, res) => {
  const news = {
    news_img: req.file.filename,
  };

  models.News.create(news)
    .then((result) => {
      res.status(201).json({
        message: 'News created successfully',
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

// @desc delete a news
// @route DELETE /news
exports.deleteNews = (req, res) => {
  const id = req.params.id;
  models.News.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'News deleted successfully',
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
