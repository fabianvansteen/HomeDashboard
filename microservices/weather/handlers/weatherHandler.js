'use strict';

/**
 * Module dependencies.
 */
var	async = require('async'),
	WeatherProvider = require('../providers/weatherProvider');

/**
 * Retrieves the weather information of today and the forecast
 * and returns the weather information as one.
 */
function retrieveWeather(callback)
{
	var weatherWeather = new WeatherProvider();

	async.parallel([
		function (callback) {
			weatherWeather.retrieveCurrentWeather(function (result, error) {
				callback(null, result);
			});
		},
		function (callback) {
			weatherWeather.retrieveForecast(function (result, error) {
				callback(null, result);
		    });
		}
	], function(err, results)
	{	
		var result = mapWeatherData(results[0], results[1]);
		callback(null, result);
	});
}

function mapWeatherData(currentWeather, weatherForecast) {
	return {
		'date' : new Date(currentWeather.dt * 1000),
		'weatherType': currentWeather.weather[0].main,
		'description': currentWeather.weather[0].description,
		'temperature': currentWeather.main.temp,
		'forecast' : 
		[
			{
				'date' : new Date(weatherForecast.list[1].dt * 1000),
				'weatherType': weatherForecast.list[1].weather[0].main,
				'description': weatherForecast.list[1].weather[0].description,
				'temperature': weatherForecast.list[1].temp.day,
			},
			{
				'date' : new Date(weatherForecast.list[2].dt * 1000),
				'weatherType': weatherForecast.list[2].weather[0].main,
				'description': weatherForecast.list[2].weather[0].description,
				'temperature': weatherForecast.list[2].temp.day,
			},
			{
				'date' : new Date(weatherForecast.list[3].dt * 1000),
				'weatherType': weatherForecast.list[3].weather[0].main,
				'description': weatherForecast.list[3].weather[0].description,
				'temperature': weatherForecast.list[3].temp.day,
			}	
		]		
	}
}

/**
 * Weather handler is responsable for handling the weather request
 * and creates a properly response.
 */
function WeatherHandler()
{
	this.retrieveWeather = retrieveWeather;
}

module.exports = WeatherHandler;