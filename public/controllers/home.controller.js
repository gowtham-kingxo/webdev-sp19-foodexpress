(function () {
    angular
        .module("FoodExpress")
        .controller("HomeController", function (
            $rootScope,
            $scope,
            $http,
            $location,
            RestaurantService,
            LoginService,
            ReviewService,
            EventService
        ) {
            $scope.search = "";
            $scope.userSearch = "";
            $scope.getFeaturedRestaurants = getFeaturedResults();
            $scope.getCurrentLoggedInUser = getCurrentLoggedInUser();
            $scope.getEvents = getEvents();
            $scope.featuredLoading = true;
            $scope.eventsLoading = true;
            $scope.getLastReview = getLastReview();

            $scope.viewRestaurant = viewRestaurant;
            $scope.getSearchResults = function () {
                $rootScope.searchType = "restaurant";
                $rootScope.search = $scope.search;

                $location.url("/search/" + $rootScope.search);
            };
            $scope.getUserSearchResults = function () {
                $rootScope.searchType = "user";
                console.log("search term is", $scope.userSearch);
                $rootScope.userSearch = $scope.userSearch;
                $location.url("/search");
            };

            function getLastReview() {
                ReviewService.getLastReview()
                    .then(response => {
                            $scope.lastReview = response.data;
                        }, err =>
                            console.log(err)
                    )
            }

            function getFeaturedResults() {
                RestaurantService.getFeaturedRestaurants().then(
                    function (response) {
                        $scope.featuredRestaurants = response.data;
                        $scope.featuredLoading = false;
                    },
                    function (err) {
                        console.log(err);
                    }
                );
            }

            function getCurrentLoggedInUser() {
                $rootScope.currentUser = JSON.parse(LoginService.getCookieData());
                console.log("current user is", $scope.currentUser);
            }

            function viewRestaurant(restaurant) {
                console.log("restaurant passed is", restaurant);
                let id = restaurant._id;
                $location.url("/restaurant/" + id);
            }

            function getEvents() {
                EventService.getEvents()
                    .then(
                        function (response) {
                            $scope.events = response.data;
                            $scope.eventsLoading = false;
                        },
                        function (err) {
                            // body
                            console.log(err);
                        }
                    )
            }
        });
})();
