app.controller('LoginCtrl', function($resource, $timeout, $scope, $state, LoginService) {

    $scope.loginRequest = {username: '', password: ''};

    $scope.login = function(){
        LoginService.login(
            $scope.loginRequest,
            function(){
                $state.go('menu');
            },
            function () {
                console.log("Pito");
            }
        );


    };

});
