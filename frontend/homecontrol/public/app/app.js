'use scrict';
    
(function (angular) {

    var app = angular.module("homeDashboard", ["ngRoute"]);

    app.config(["$routeProvider",
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
    
})(angular);