'use scrict';

var express = require('express');
var app = express();

var config = require('./config.js');

require('./src/server/routes/app').addRoutes(app, config);
require('./src/server/routes/static').addRoutes(app, config);

app.get('/', function (req, res) {
  res.sendfile('index.html', { root: config.server.distFolder });
});

var server = app.listen(config.server.listenPort, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Home dashboard app listening at http://%s:%s', host, port);

});