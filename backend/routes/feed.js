const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/posts', isAuth, feedController.getPosts);

router.post(
  '/post',
  isAuth,
  [
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.createPost
);

router.get('/post/:postId', feedController.getPost);

router.get('/posts/:filterBy', feedController.getFilteredPosts)

router.post('/post/:postId/comments', isAuth, feedController.createComment)

router.post('/post/:postId?upvote', isAuth, feedController.postUpvote)

router.put(
  '/post/:postId',
  isAuth,
  [
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.updatePost
);

router.delete('/post/:postId', isAuth, feedController.deletePost);

module.exports = router;
