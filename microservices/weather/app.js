var express = require('express');
var logger = require('./utils/logger');

var app = express();

app.set('view engine', 'jade');

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	response.status(200).json(getVersionInformation());
});

app.get('/weather', function (request, response) {
	response.render('weather');
});

var server = app.listen(8082, function () {

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

