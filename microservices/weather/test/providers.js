var assert = require('assert');
var WeatherProvider = require('../providers/weatherProvider');

describe('Providers tests', function () {

    it('Weather provider', function (done) {		
		
		// Arrange
		var weatherProvider = new WeatherProvider();
		
		// Act
		weatherProvider.getWeatherInformation(
			function (data) {
												
				// Assert
				assert.equal(data.name, 'Dordrecht');
				
				done();
			},
			function (error)
			{				
				// Assert
				//assert.ok(actual, 'this will fail');
			}
		);
		
    });

});