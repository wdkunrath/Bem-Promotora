var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views', './app/views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

module.exports = {app, express};
