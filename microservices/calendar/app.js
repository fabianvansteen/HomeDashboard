'use strict';

/**
 * Module dependencies.
 */
var express = require('express');

var app = express();

app.use(function(req, res, next){
  res.status(404);

  // default to plain-text. send()
  res.type('txt').send('Not found');
});


/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	response.status(200).json(getVersionInformation());
});

var server = app.listen(8084, function () {

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