(function (angular) {

    var appUrl = "api/bookmarks";

    function BookmarkService($http) {

        function getBookmarks(callback) {
            $http.get(appUrl)
                .success(function (data) {
                callback(null, data);
            })
                .error(function (data) {
                callback(data, null);
            });
        }

        return {
            getBookmarks: getBookmarks
        };
    }

    BookmarkService.$inject = ["$http"];

    angular.module("homeDashboard").factory("bookmarkService", BookmarkService);

})(angular);