(function () {
    angular
        .module("FoodExpress")
        .controller("RegisterController", function ($rootScope, $scope, $window, UserService) {
            $scope.types = [
                "REGISTERED", "CRITIC", "OWNER"
            ];

            $scope.register = function () {
                if (!$scope.picture) {
                    $scope.picture = "https://i.stack.imgur.com/34AD2.jpg";
                }
                var user = {
                    username: $scope.username,
                    email: $scope.email,
                    password: $scope.password,
                    confirmpassword: $scope.confirmPassword,
                    streetaddress: $scope.address,
                    streetaddress2: $scope.address2,
                    city: $scope.city,
                    state: $scope.state,
                    country: $scope.country,
                    zipcode: $scope.zip,
                    phone: $scope.phone,
                    picture: $scope.picture,
                    userType: $scope.type,

                    name: $scope.company,
                    position: $scope.position,

                    credit_card_number: $scope.creditCardNumber,
                    cardType: $scope.cardType,
                    cvv: $scope.cvv
                };
                console.log("user getting post is", user);

                if(user.username.length === 0 ||
                    !user.email ||
                    !user.streetaddress ||
                    !user.streetaddress2 ||
                    !user.city ||
                    !user.state ||
                    !user.country ||
                    !user.zipcode ||
                    !user.phone ||
                    !user.userType){
                    alert("All fields are required");
                    return;
                }

                UserService.register(user)
                    .then(function (response) {
                        alert("Registration successful!");
                        $window.location.href = '/';
                    }, function (err) {
                        if (err.data.password === 'Passwords do not match') {
                            alert("Passwords do not match");
                        }
                    });
            };
        });
})();
