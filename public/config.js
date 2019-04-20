(function () {
    angular
        .module("FoodExpress")
        .config(configuration);

    function configuration($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $httpProvider.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        $httpProvider.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';


        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');

        $routeProvider
            .when("/", {
                templateUrl: "./views/home.view.client.html",
                controller: "HomeController"
            })
            .when("/search/:searchTerm", {
                templateUrl: "./views/search.view.client.html",
                controller: "SearchController"
            })
            .when("/login", {
                templateUrl: "./views/login.view.client.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "./views/register.view.client.html",
                controller: "RegisterController"
            })
            .when("/profile", {
                templateUrl: "./views/profile.view.client.html",
                controller: "UserController"
            })
            .when("/profile/:userId", {
                templateUrl: "./views/profile.view.client.html",
                controller: "OtherUserController"
            })
            .when("/restaurant/:restaurantId", {
                templateUrl: "./views/restaurant.view.client.html",
                controller: "RestaurantController"
            })
            .when("/restaurants", {
                templateUrl: "./views/restaurants.view.client.html",
                controller: "RestaurantsController"
            })
            .when("/create-restaurant", {
                templateUrl: "./views/create-restaurant.view.client.html",
                controller: "CreateRestaurantController"
            })
            .when("/update-restaurant/:restaurantId", {
                templateUrl: "./views/update-restaurant.view.client.html",
                controller: "UpdateRestaurantController"
            })
            .when("/update-user/:userId", {
                templateUrl: "./views/update-user.view.client.html",
                controller: "UpdateUserController"
            })
            .when("/favorites/:userId", {
                templateUrl: "./views/favorites.view.client.html",
                controller: "FavoritesController"
            })
            .when("/create-favorite/:userId", {
                templateUrl: "./views/create-favorite.view.client.html",
                controller: "CreateFavoriteController"
            })
            .when("/update-favorite/:userId/:restaurantId", {
                templateUrl: "./views/update-favorite.view.client.html",
                controller: "UpdateFavoriteController"
            });
    }

})();
