(function (angular) {
    "use strict";

    function dashboardController(dashboardService, $scope) {
    }

    dashboardController.$inject = ["dashboardService", "$scope"];

    angular.module("homeDashboard")
        .controller("dashboardController", dashboardController);

})(angular);