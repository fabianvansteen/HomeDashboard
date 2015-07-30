"use strict";
    
(function (angular) {

    function appController(appService, $scope) {

        function getAppInformation() {
            appService.getAppInformation(function (error, data) {
                $scope.appInformation = data.appInformation;
            });
        }

        getAppInformation();
    }

    appController.$inject = ['appService', '$scope'];

    angular.module('homeDashboard')
        .controller('appController', appController);

})(angular);