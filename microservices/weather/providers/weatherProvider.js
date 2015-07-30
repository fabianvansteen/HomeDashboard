var http = require('http');

function WeatherProvider() {
	this.getWeatherInformation = getWeatherInformation;
}

function getWeatherInformation(callback) {

	var options = {
		host: 'api.openweathermap.org',
		port: 80,
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

module.exports = WeatherProvider;