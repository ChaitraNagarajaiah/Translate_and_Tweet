const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public')); 

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function () {
    console.log("Listening on PORT" + PORT);
    console.log("http://localhost:" + PORT);
});