(function () {
    angular
        .module("FoodExpress")
        .factory("SearchService", searchService);

    function searchService($http) {

        var api = {
            getSearchRestaurants: getSearchRestaurants,
            getSearchUsers: getSearchUsers
        };
        return api;
        function getSearchRestaurants(term){
            // console.log("gow: ----"+term)
            url = "http://localhost:5000/api/restaurant/search/" + term;
            return $http.get(url);
        }

        function getSearchUsers(term){
            url = "http://localhost:5000/api/user/search/" + term;
            return $http.get(url);
        }
        

    }
})();