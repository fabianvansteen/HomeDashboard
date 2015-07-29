(function (angular) {

    function dashboardService($http) {

        function getWeatherWidget(callback)
        {
            var url = 'http://localhost:8082/weather';
            $http({
                url: url
            })
            .success(function (data) {
                callback(data, null);
            })
            .error(function (error) {
                callback(null, error)
            });
        }
 
        return {
            'getWeatherWidget' : getWeatherWidget
        }
    }

    dashboardService.$inject = ["$http"];

    angular.module("homeDashboard")
        .factory("dashboardService", dashboardService);

})(angular);