(function (angular) {

    var dashboardUrl = "api/dashboard";

    function dashboardService($http) {

        function getItems(callback) {
            $http.get(dashboardUrl)
               .success(function (data) {
                   callback(null, data);
               })
               .error(function (data) {
                   callback(data, null);
               });
        }

        return {
            getItems: getItems
        };
    }

    dashboardService.$inject = ["$http"];

    angular.module("homeDashboard").factory("dashboardService", dashboardService);

})(angular);