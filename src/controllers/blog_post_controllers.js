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
const getPostById = async (req, res, next) => {
  try {
    const post = model.getPostById(req.params.id)
    console.log(post);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
}

// createPost
// updatePost
// deletePost

module.exports = {
  getAllPosts,
  getPostById
  // createPost,
  // updatePost,
  // deletePost
};
