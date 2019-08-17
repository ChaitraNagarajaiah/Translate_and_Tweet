// const http = require('http');

const express = require('express');
const path = require('path');

const app = express();
var PORT = 3000;

// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.json);

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "test.html"));
// });

// ROUTES
app.get("/", function (req, res) {
    // res.send("Hello World");
    res.sendFile(path.join(__dirname, "test.html"));
});

app.get("/css/style.css", function (req, res) {
    // res.send("Hello World");
    res.sendFile(path.join(__dirname, "/css/style.css"));
});



app.listen(PORT, function () {
    console.log("Application listening on PORT " + PORT + "\n http://localhost:" + PORT + "/");
});