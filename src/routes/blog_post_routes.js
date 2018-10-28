const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/blog_post_controllers');

router.post('/', ctrl.createPost);
// router.get('/', ctrl.getAllPosts);
// router.get('/:id', ctrl.getPostById);
// router.put('/:id', ctrl.update);
// router.delete('/:id', ctrl.deletePost);

module.exports = router;
