var express = require('express');
var logger = require('./utils/logger');

var app = express();

app.set('view engine', 'jade');



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5003');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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

