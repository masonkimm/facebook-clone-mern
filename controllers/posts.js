const Post = require('../models/Post');

// @desc      Get all posts
// @route     GET /api/v1/posts
// @access    Public
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc      Add a post
// @route     POST /api/v1/posts
// @access    Public
exports.addPost = async (req, res, next) => {
  try {
    const { status } = req.body;

    const post = await Post.create(req.body);

    return res.status(201).json({
      success: true,
      data: post,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

// @desc      Delete a post
// @route     DELETE /api/v1/posts/:id
// @access    Public
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'No post found',
      });
    }
    await post.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
