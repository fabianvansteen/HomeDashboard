'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var WeatherProvider = require('../providers/weatherProvider');

/**
 * Weather provider tests.
 */
describe('Weather provider tests', function () {

    it('retrieve current weather returns result', function (done) {		
		
		// Arrange
		var weatherProvider = new WeatherProvider();
		
		// Act
		weatherProvider.retrieveCurrentWeather(
			function (success, error) {
													
				// Assert
				assert.ok(success, 'Request is null');

				done();
			});
    });
	
    it('retrieve forecast weather returns result', function (done) {		
		
		// Arrange
		var weatherProvider = new WeatherProvider();
		
		// Act
		weatherProvider.retrieveForecast(
			function (success, error) {
													
				// Assert
				assert.ok(success, 'Request is null');

				done();
			});
    });
});