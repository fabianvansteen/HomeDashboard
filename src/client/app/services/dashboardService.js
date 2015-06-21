(function (angular) {

    var dashboardUrl = "api/dashboard";

    function dashboardService($http) {

        return null;
    }

    dashboardService.$inject = ["$http"];

    angular.module("homeDashboard")
        .factory("dashboardService", dashboardService);

})(angular);