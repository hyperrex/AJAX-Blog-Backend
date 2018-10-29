const uuid = require('uuid/v4');
const database = require('../../database/db.json');

// getAllPosts
const getAllPosts = () => {
  return database;
};

// getPostById
const getPostById = id => {
  let result = database.find(post => post.id === id);
  if (!result) {
    result = { status: 400, error: 'ID not found' };
    return result;
  }
  return result;
};

// createPost
const createPost = (title, content) => {
  let error;
  if (!title || !content) {
    error = { status: 400, error: 'No title or content sent!' };
    return error;
  }
  let newPost = {
    id: uuid(),
    title,
    content
  };
  database.push(newPost);
  return newPost;
};

// updatePost
const updatePost = (id, title, content) => {
  let result = database.find(post => post.id === id);
  if (!result) {
    result = { status: 400, error: 'ID not found' };
    return result;
  }
  database.forEach((post, id) => {
    if (post.id === id) {
      database[id].title = title;
      database[id].content = content;
      result = database[id];
    }
  });
  return result;
};

// deletePost
const deletePost = id => {
  let result = database.find(post => post.id === id);
  if (!result) {
    result = { status: 400, error: 'ID not found' };
    return result;
  }
  for (let x = 0; x < database.length; x++) {
    if (database[x].id === id) {
      database.splice(x, 1);
    }
    return database;
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
