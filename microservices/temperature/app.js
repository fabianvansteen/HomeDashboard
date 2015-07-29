var express = require('express');

var app = express();

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	response.status(200).json(getVersionInformation());
});

var server = app.listen(8083, function () {

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