(function (angular) {

    var appUrl = "api/app";

    function AppService($http) {

        


        function getAppInformation(callback) {
            
            var url = '/weather';
            $http({
                url: url
            })
            .success(function (data) {
                console.log(data);
            })
            .error(function (data) {
                
            });
            
            $http.get(appUrl)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data) {
                    callback(data, null);
                });
        }

        return {
            getAppInformation: getAppInformation
        };
    }

    AppService.$inject = ["$http"];

    angular.module("homeDashboard")
        .factory("appService", AppService);

})(angular);