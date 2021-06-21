var express = require('express');
var app = express();
var morgan = require('morgan');
var cors = require('cors');

var port = process.env.PORT0 || 3000;
var host = process.env.HOST || "0.0.0.0";

app.use(morgan('combined'));
app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/file_directory'));

app.get('/status', function (req, res) {
  res.send('Webserver is up: /public & /file_directory are the endpoints');
});

app.use(function(req, res, next) {
  res.status(404).end();
});

var server = app.listen(port, host);
