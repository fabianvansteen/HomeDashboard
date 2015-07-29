'use strict';

/**
 * Module dependencies.
 */
var express = require('express');

var app = express();

app.set('view engine', 'jade');

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	response.status(200).json(getVersionInformation());
});

app.get('/calendar', function (req, res) {
  res.render('calendar-widget', { 'events' :
	  [{
		  'name': 'Sporten'
	  },
	  {
		  'name': 'Sporten 2'
	  }]
	  });
});

var server = app.listen(20012, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('listening at http://%s:%s', host, port);
});

function getVersionInformation() {
	var json = require('./package.json');

	return {
		'name': json.name,
		'version': json.version,
		'description': json.description,
		'author': json.author,
		'license': json.license
	};
}