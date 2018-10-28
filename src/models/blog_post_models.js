const uuid = require('uuid/v4');
const database = require('../../database/db.json');

// getAllPosts
const getAllPosts = () => {
  return database;
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