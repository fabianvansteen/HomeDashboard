"use strict";

(function (angular) {

    function dashboardController(weatherService, $scope, $sce) {

        weatherService.retrieveWeather(function (err, result) {
            $scope.weather = result;
        });
    }

    dashboardController.$inject = ["weatherService", "$scope"];

    angular.module("homeDashboard")
        .controller("dashboardController", dashboardController);

})(angular);