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
    const post = await model.getPostById(req.params.id);
    // console.log(post);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

// createPost
const createPost = async (req, res, next) => {
  try {
    const post = await model.createPost(req.body.title, req.body.content);
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

// updatePost
const updatePost = async (req, res, next) => {
  try {
    const post = await model.updatePost(req.params.id, req.body.title, req.body.content);
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

// deletePost
const deletePost = async (req, res, next) => {
  try {
    const post = await model.deletePost(req.params.id);
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
