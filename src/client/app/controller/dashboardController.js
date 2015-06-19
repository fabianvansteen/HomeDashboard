(function (angular) {
    "use strict";

    function dashboardController(dashboardService, $scope) {
    
        function refresh() {
            dashboardService.getItems(function (error, data) {
                $scope.version = data.version;
            });
        }

        refresh();        
    }

    dashboardController.$inject = ["dashboardService", "$scope"];

    angular.module("homeDashboard").controller("dashboardController", dashboardController);

})(angular);