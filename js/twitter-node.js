require('dotenv').config();

const Twitter = require('twitter');
const keys = require('./keys');


// var client = new Twitter({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });


var client = new Twitter(keys.twitter);

console.log(client);

//POST statuses/update

client.post('statuses/update', {
    status: 'I Love Twitter'
}, function (error, tweet, response) {
    if (error) console.log(error);
    console.log(tweet); // Tweet body.
    // console.log(response); // Raw response object.
});

// client.post('statuses/update', {
//         status: 'I Love Twitter'
//     })
//     .then(function (tweet) {
//         console.log(tweet);
//     })
//     .catch(function (error) {
//         throw error;
//     })