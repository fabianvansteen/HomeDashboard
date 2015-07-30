var express = require('express');
var logger = require('./utils/logger');
var WeatherProvider = require('./providers/weatherProvider');

var app = express();

var port = 20010;

/**
  * HTTP GET /api/version
  * Returns: Return the application version information.
  */
app.get('/version', function (request, response) {
	response.status(200).json(getVersionInformation());
});

app.get('/template', function (request, response) {

	response.render('weather');
});

app.get('/weather', function (req, res) {
    var weatherWeather = new WeatherProvider();

    weatherWeather.getWeatherInformation(function (success, error) {

		var weatherData = mapWeatherData(success);

        res.status(200).json(weatherData)
    });
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

function mapWeatherData(weatherData) {
	return {
		'weatherType': weatherData.weather[0].main,
		'description' : weatherData.weather[0].description,
		'temperature': weatherData.main.temp,
		'pressure': weatherData.main.pressure,
		'humidity': weatherData.main.humidity
	}
}

