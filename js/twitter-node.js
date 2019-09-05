require('dotenv').config();

const Twitter = require('twitter');
const keys = require('./keys');




command = process.argv[2];


if (command === "tweet") {
    status = "";
    for (let i = 3; i < process.argv.length; i++) {
        status += process.argv[i] + " ";
    }
}

var client = new Twitter(keys.twitter);

console.log(client);

//POST statuses/update

// client.post('statuses/update', {
//     status: 'I Love Twitter'
// }, function (error, tweet, response) {
//     if (error) console.log(error);
//     console.log(tweet); // Tweet body.
//     console.log(response); // Raw response object.
// });

client.post('statuses/update', {
        status: status
    })
    .then(function (tweet) {
        console.log(tweet);
    })
    .catch(function (error) {
        throw error;
    });