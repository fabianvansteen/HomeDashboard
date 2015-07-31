'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
	config = require('./config'),
	VersionHandler = require('./handlers/versionHandler');

var app = express();

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (req, res) {
	var handler = new VersionHandler();

	var version = handler.retrieveVersion();

	res.status(200).jsonp(version);
});

app.get('/temperature', function (req, res) {
	res.status(200).jsonp({ 'room': req.query.room, 'temperature': 21.5 });
});

var server = app.listen(config.express.port, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('listening at http://%s:%s', host, port);
});