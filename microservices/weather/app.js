'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
	logger = require('./utils/logger'),
	WeatherHandler = require('./handlers/weatherHandler');

var app = express(),
	port = 20010;

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	response.status(200).json(getVersionInformation());
});

app.get('/weather', function (req, res) {
    var handler = new WeatherHandler();
	
	handler.retrieveWeather(
		function(err, result)
		{			
			res.status(200).json(result);
		}
	);
});

var server = app.listen(port, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('listening at http://%s:%s', host, port);
});

function getVersionInformation() {
	var pjson = require('./package.json');

	return {
		'name': pjson.name,
		'version': pjson.version,
		'description': pjson.description,
		'author': pjson.author,
		'license': pjson.license
	};
}

