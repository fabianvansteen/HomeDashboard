(function (angular) {
    "use strict";

    function BookmarkController(bookmarkService, $scope) {

        bookmarkService.getBookmarks(function (error, data) {
            $scope.groups = data;
        });
    }

    BookmarkController.$inject = ['bookmarkService', '$scope'];

    angular.module('homeDashboard').controller('bookmarkController', BookmarkController);

})(angular);