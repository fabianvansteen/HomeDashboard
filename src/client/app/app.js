(function (angular) {

    var homeApp = angular.module("homeDashboard", ["ngRoute"]);

    homeApp.config(["$routeProvider",
          function ($routeProvider) {
              $routeProvider.
                when("/dashboard", {
                    templateUrl: "app/partials/dashboard.html",
                    controller: "dashboardController"
                }).
                otherwise({
                    redirectTo: "/dashboard"
                });
          }]);

})(angular);