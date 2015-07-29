(function (angular) {
    "use strict";

    function dashboardController(dashboardService, $scope, $sce) {

        dashboardService.getWeatherWidget(function (data, error) {
            $scope.weatherWidget = $sce.trustAsHtml(data);
        });
    }

    dashboardController.$inject = ["dashboardService", "$scope", '$sce'];

    angular.module("homeDashboard")
        .controller("dashboardController", dashboardController);

})(angular);