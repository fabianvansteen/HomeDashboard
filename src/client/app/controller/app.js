(function (angular) {
    "use strict";

    function dashboardController(favoriteService, $scope) {
        var vm = this;

        vm.version = favoriteService.version;

        function refresh() {
            favoriteService.getFavorites(function (error, data) {
                $scope.bookmarkGroups = data;
            });
        };
        
        refresh();
    }

    dashboardController.$inject = ["favoriteService", "$scope"];
    
    angular.module("homeApp").controller("dashboardController", dashboardController);

})(angular);