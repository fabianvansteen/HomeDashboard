(function (angular) {
    'use scrict';

    var homeApp = angular.module("homeDashboard", ["ngRoute"]);

    homeApp.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider.
                when("/dashboard", {
                    templateUrl: "app/partials/dashboard.html",
                    controller: "dashboardController"
                })
                .otherwise({
                    redirectTo: "/dashboard"
                });
        }]);

    homeApp.factory('weatherService', function ($http) {
        return {
            getWeather: function () {
                var weather = { temp: {}, clouds: null };
                $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=Salzburg,at&units=metric&callback=JSON_CALLBACK').success(function (data) {
                    if (data) {
                        if (data.main) {
                            weather.temp.current = data.main.temp;
                            weather.temp.min = data.main.temp_min;
                            weather.temp.max = data.main.temp_max;
                        }
                        weather.clouds = data.clouds ? data.clouds.all : undefined;
                    }
                });

                return weather;
            }
        };
    });

    homeApp.filter('temp', function ($filter) {
        return function (input, precision) {
            if (!precision) {
                precision = 1;
            }
            var numberFilter = $filter('number');
            return numberFilter(input, precision) + '\u00B0C';
        };
    });

    homeApp.controller('WeatherCtrl', function ($scope, weatherService) {
        $scope.weather = weatherService.getWeather();
    });

    homeApp.directive('weatherIcon', function () {
        return {
            restrict: 'E', replace: true,
            scope: {
                cloudiness: '@'
            },
            controller: function ($scope) {
                $scope.imgurl = function () {
                    var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                    if ($scope.cloudiness < 20) {
                        return baseUrl + 'sunny.png';
                    } else if ($scope.cloudiness < 90) {
                        return baseUrl + 'partly_cloudy.png';
                    } else {
                        return baseUrl + 'cloudy.png';
                    }
                };
            },
            template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
        };
    });

})(angular);