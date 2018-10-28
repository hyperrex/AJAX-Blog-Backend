const uuid = require('uuid/v4');
const database = require('../../database/db.json');

// getAllPosts
const getAllPosts = () => {
  return database;
};

const getPostById = id => {
  let result = database.find(post => post.id === id);
  if (!result) {
    result = { status: 400, error: 'ID not found' };
    return result;
  }
  return result;
};
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
