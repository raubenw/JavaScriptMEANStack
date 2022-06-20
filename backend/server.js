var express = require('express');
var app = express();

const port = 3000;

app.get('/', (req, res) => {
    console.log("Web Browser Opened");
    res.send("Welcome to the Mean Stack Auth Course");
});

app.listen(port);