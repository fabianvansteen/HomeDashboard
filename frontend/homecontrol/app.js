/* global setHeader */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

var publicFolder = path.join(__dirname, 'public');

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	response.status(200).json(getVersionInformation());
});

/**
* HTTP GET /favicon.ico
* Returns: Return the fav icon.
*/
var faviconPath = path.join(publicFolder, '/favicon.ico')
app.use(favicon(faviconPath));


app.use(express.static(publicFolder));

/**
  * HTTP GET /
  * Returns: Return the index.html page
  */
app.get('/', function (request, response) {
	response.sendFile('index.html', { root: publicFolder });
});


var server = app.listen(20000, function () {
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