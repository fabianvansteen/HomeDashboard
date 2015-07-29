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

app.get('/temperature', function (req, res) {
	
	res.render('temperature-widget', { 'room': req.query.room });
});

var server = app.listen(20011, function () {

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