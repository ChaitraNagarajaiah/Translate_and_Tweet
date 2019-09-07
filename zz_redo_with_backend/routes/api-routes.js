require('dotenv').config();

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// client.post('statuses/update', {
//     status: 'I am a tweet'
// }, function (error, tweet, response) {
//     if (!error) {
//         console.log(tweet);
//     }
// });

function postTweet(tweet) {
    client.post('statuses/update', {
        status: tweet
    }, function (error, tweetInfo, response) {
        if (!error) {
            console.log(tweetInfo);
            // return tweetInfo;
        }
    });
}

/// TODO: FIGURE OUT HOW TO SEND BACK TWEET INFO TO CLIENT
module.exports = function (app) {
    app.post('/api/tweet', function (req, res) {        
        console.log(req.body);
        console.log(postTweet(req.body.message));

        res.json({
            message: "Hello World"
        });
    });
};