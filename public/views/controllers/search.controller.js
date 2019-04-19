(function() {
  angular
    .module("FoodExpress")
    .controller("SearchController", function(
      $rootScope,
      $scope,
      $http,
      SearchService,
      $location,
      $routeParams
    ) {
      $scope.getRestaurants = getRestaurants();
      $scope.getUsers = getUsers();
      $scope.viewRestaurant = viewRestaurant;
      $scope.viewUser = viewUser;



      function getRestaurants() {

        //remove

          var searchTerm = $routeParams.searchTerm;
          var flag = 0;
          console.log("hello.. 1 = "+searchTerm);
        if (($rootScope.searchType == "restaurant")) {

            //remove
            console.log("hello.. 2")

            // if(searchTerm !== undefined) {
            //     $rootScope.searchType = searchTerm;
            // }

          console.log("ipo in search controller: "+$rootScope.search)

          SearchService.getSearchRestaurants($rootScope.search).then(
            function(response) {
              console.log("response is", response);
              $scope.restaurants = response.data;

              //mine-gow
              if((response.data.length === 0) && (flag == 0)) {
                  flag = 1;
                  alert('Sorry no restaurants found!')
                  console.log('No results')
                  $location.url("/");
              }
            },
            function(err) {
              console.log(err);
            }
          );
        } else if(searchTerm !== undefined) {
            $rootScope.searchType = "restaurant";
            $rootScope.search = searchTerm;

          console.log("in else + "+$rootScope.searchType);
          console.log("in else - search Term"+searchTerm);

            SearchService.getSearchRestaurants(searchTerm).then(
                function(response) {
                    console.log("response is", response);
                    $scope.restaurants = response.data;
                },
                function(err) {
                    console.log(err);
                }
            );
        }
      }

      // getRestaurants();


      function getUsers() {
        if ($rootScope.searchType == "user") {
            console.log("search term is", $rootScope.userSearch);
          SearchService.getSearchUsers($rootScope.userSearch).then(
            function(response) {
              $scope.users = response.data;
              console.log("users received are", $scope.users);
            },
            function(err) {
              console.log("error fetching users ", err);
            }
          );
        }
      }

      function viewRestaurant(restaurant) {
        console.log("restaurant passed is", restaurant);
        let id = restaurant._id;
        $location.url("/restaurant/" + id);
      }

      function viewUser(user){
          $location.url("/user/" + user._id);
      }
    });
})();
