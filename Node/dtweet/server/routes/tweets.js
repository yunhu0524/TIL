import express from 'express';
import * as tweetRepository from '../data/index.js';
import * as tweetController from '../controller/index.js';

const router = express.Router();

// GET
/* /tweets */
router.get('/', tweetController.getTweets);

/* /tweets/:id */
router.get('/:id', tweetController.getTweetsById);

/*  POST  */
router.post('/', tweetController.createTweet);

/*  PUT  */
router.put('/:id', tweetController.updateTweet);

// DELETE
router.delete('/:id', tweetController.deleteTweet);

export default router;
