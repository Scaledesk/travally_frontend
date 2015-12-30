angular.module('Travally')
    .controller('RootController', function($http, $scope, $auth, $location, $rootScope, Profile) {
        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };
        $scope.logout = function() {
            $auth.logout();
            $rootScope.user_profile = null;
            $location.path('/');
        };
        $scope.activeVal = 1;
        $scope.$on('LOAD', function(){$scope.loading = true});
        $scope.$on('UNLOAD', function(){$scope.loading = false});

        if($auth.isAuthenticated())
        {
            Profile.get().then(function(data){
                $rootScope.user_profile = data.data.data;
                console.log("aaa");
            });
        }
    });