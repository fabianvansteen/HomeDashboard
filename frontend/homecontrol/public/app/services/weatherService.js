(function (angular) {

    function weatherService($http) {
        
        var url = 'http://localhost:20010/weather?callback=JSON_CALLBACK';
            
        function retrieveWeather(callback)
        {
            $http.jsonp(url)
            .success(function (result) {
                callback(null, result);
            })
            .error(function (err) {
                callback(err, null)
            });
        }
 
        return {
            'retrieveWeather' : retrieveWeather
        }
    }

    weatherService.$inject = ["$http"];

    angular.module("homeDashboard")
        .factory("weatherService", weatherService);

})(angular);