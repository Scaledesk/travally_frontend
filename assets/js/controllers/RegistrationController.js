angular.module('Travally').controller('RegistrationController', function ($rootScope,$scope, $auth, $location, Registration) {

    if($auth.isAuthenticated())
    {
        $location.path('/');
    }
    $scope.reg_text = 'Sign Up';
    $scope.sign_up_successful = false;

    $scope.authenticate = function (provider) {
        //$scope.disabled = true;
        // $scope.reg_text = 'Please Wait...';
        $auth.authenticate(provider)
            .then(function (response) {
                window.localStorage['user_id'] = response.data.user_id;
                //$rootScope.profile = UserProfile.get({id: window.localStorage['user_id']});
                //console.log($rootScope.profile.data);
                $location.path('/search');
            }).catch(function(response){

            });
    };

    $scope.registration = new Registration();
    $scope.userRegistration = function () {
        //$scope.registration.password_confirmation = $scope.registration.password;
        if($scope.registration.email == undefined || $scope.email == '')
        {
            $scope.error_email_required = true;
            return;
        }
        if($scope.registration.password == undefined || $scope.password == '')
        {
            $scope.error_password_required = true;
            return;
        }
        if($scope.registration.email != undefined)
        {if($scope.registration.email.indexOf("@") == -1 || $scope.registration.email.indexOf(".") == -1 )
        {
            $scope.error_email_invalid = true;
            return;
        }
        }
        $scope.disabled = true;
        $scope.reg_text = 'Please Wait...';
        $scope.registration.$save(function (data) {
                $scope.disabled = false;
                console.log('successfully registration');
                $scope.sign_up_successful = true;
                $scope.reg_text = 'Sign Up';
            },
            function (response) {
                $scope.disabled = false;
                $scope.error_messages = response.data.message;
                $scope.reg_text = 'Sign Up';
                console.log('error occurred');
            });
    };

});