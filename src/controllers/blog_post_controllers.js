const model = require('../models/blog_post_models');

// getAllPosts
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await model.getAllPosts();
    // console.log(posts);
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

// getPostById
// createPost
// updatePost
// deletePost

module.exports = {
  getAllPosts
  // getPostById
  // createPost,
  // updatePost,
  // deletePost
};
