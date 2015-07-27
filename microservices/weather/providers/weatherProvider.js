var http = require('http');

function WeatherProvider() {
	this.getWeatherInformation = getWeatherInformation;
}

function getWeatherInformation(succes, error) {

	var options = {
		host: 'api.openweathermap.org',
		port: 80,
		path: '/data/2.5/weather?q=Dordrecht,NL'
	};

	http.get(options, function (response) {
				
		response.on('data', 
			function (data) {
				var json = JSON.parse(data);
				
				succes(json);
			});
		
	}).on("error", error);
}

module.exports = WeatherProvider;