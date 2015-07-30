'use strict';

/**
 * Module dependencies.
 */
var http = require('http');

var host = 'api.openweathermap.org';
var port = 80;

/**
 * Retrieves the current weather.
 */
function retrieveCurrentWeather(callback) {

	var options = {
		host: host,
		port: port,
		path: '/data/2.5/weather?q=Dordrecht,nl&units=metric'
	};

	http.get(options, function (response) {
				
		response.on('data', 
			function (data) {
				var json = JSON.parse(data);
				
				callback(json, null);
			});
		
	}).on("error", function(error)
	{
		callback(null, error);
	});
}

/**
 * Retrieves the forecast of the weather up to 4 days (including today).
 */
function retrieveForecast(callback) {

	var options = {
		host: host,
		port: port,
		path: '/data/2.5/forecast/daily?q=Dordrecht,nl&units=metric&cnt=4'
	};

	http.get(options, function (response) {
				
		response.on('data', 
			function (data) {
				var json = JSON.parse(data);
				
				callback(json, null);
			});
		
	}).on("error", function(error)
	{
		callback(null, error);
	});
}

/**
 * Weather provider responsable for retrieving the weather information.
 */
function WeatherProvider() {
	this.retrieveCurrentWeather = retrieveCurrentWeather;
	this.retrieveForecast = retrieveForecast;
}

module.exports = WeatherProvider;