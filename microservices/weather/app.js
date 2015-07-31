'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
	logger = require('./utils/logger'),
	config = require('./config'),
	WeatherHandler = require('./handlers/weatherHandler'),
	VersionHandler = require('./handlers/versionHandler');

var app = express();

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	var handler = new VersionHandler();
	
	var version = handler.retrieveVersion();
	
	response.status(200).jsonp(version);
});

app.get('/weather', function (req, res) {
    var handler = new WeatherHandler();
	
	handler.retrieveWeather(
		function(err, result)
		{	
			res.status(200).jsonp(result);
		}
	);
});

var server = app.listen(config.express.port, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('listening at http://%s:%s', host, port);
});

