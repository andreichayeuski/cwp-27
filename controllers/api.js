const express = require('express');

module.exports = (
    userService,
    tweetService,
    likeService
) => {
    const router = express.Router();

    //defining controller
    const userController = require('./user')(
        userService,
        tweetService,
        likeService
    );

    const tweetsController = require('./tweets')(
        tweetService
    );
    //defining routers
    router.use('/users', userController);
    router.use('/tweets', tweetsController);

    return router;
};