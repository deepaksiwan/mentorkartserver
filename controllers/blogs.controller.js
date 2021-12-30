const models = require('../models');

// @desc get all blogs
// @route GET /blogs
exports.getBlogs = (req, res) => {
  models.Blog.findAll()
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

// @desc get single blog
// @route GET /blogs/:id
exports.getBlog = (req, res) => {
  const id = req.params.id;

  models.Blog.findByPk(id)
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

// @desc create a blog
// @route POST /blogs
exports.addBlog = (req, res) => {
  const result = JSON.parse(JSON.stringify(req.body));
  const blog = {
    blog_bg: req.file.filename,
    blog_title: result.BlogTitle,
    blog_content: result.BlogContent,
    blog_tag: result.BlogTag,
    blog_author: result.BlogAuthor,
  };
  //console.log(req,body);

  models.Blog.create(blog)
    .then((result) => {
      res.status(201).json({
        message: 'Blog created successfully',
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

// @desc delete a blog
// @route DELETE /blogs
exports.deleteBlog = (req, res) => {
  const id = req.params.id;
  models.Blog.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'Blog deleted successfully',
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

// @desc edit a blog
// @route PUT /blogs
exports.editBlog = (req, res) => {
  const id = req.params.id;
  const result = JSON.parse(JSON.stringify(req.body));

  let updatedBlog = {};

  if (req.file) {
    updatedBlog = {
      blog_bg: req.file.filename,
      blog_title: result.BlogTitle,
      blog_content: result.BlogContent,
      blog_tag: result.BlogTag,
      blog_author: result.BlogAuthor,
    };
  } else {
    updatedBlog = {
      blog_title: result.BlogTitle,
      blog_content: result.BlogContent,
      blog_tag: result.BlogTag,
      blog_author: result.BlogAuthor,
    };
  }

  models.Blog.update(updatedBlog, { where: { id: id } })
    .then((result) => {
      res.status(201).json({
        message: 'Blog updated successfully',
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
