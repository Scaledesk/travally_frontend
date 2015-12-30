angular.module('Travally').controller('ResetPasswordController', function ($rootScope,$scope, $auth, $location, Profile) {
    if($auth.isAuthenticated())
    {
        console.log('authenticated');
        $location.path('/');
    }
    $scope.newData = {
    'forgot_password_code':$location.search().code
    };
    console.log($scope.newData);
    $scope.reset_text = 'Reset';
$scope.disabled = false;
    $scope.forgot_password_text=false;
    $scope.resetForgotPassword = function(){
        $scope.disabled = true;
        $reset_text = 'Please Wait...';
        Profile.resetForgotPassword($scope.newData).then(function(data){
            $scope.disabled = false;
            $scope.reset_text = 'Reset';
            $scope.message = data;
            console.log(data);
            $scope.forgot_password_text=true;
            return;
        })
            .catch(function(data){
            console.log(data);
            });
    };
});