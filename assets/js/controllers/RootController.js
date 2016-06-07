angular.module('Travally')
    .controller('RootController', function($http, $scope, $auth, $location, $rootScope, Profile) {
        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        $rootScope.flightSearch = {};
        $rootScope.getFareQuoteRequest = {};
        $rootScope.getFareQuoteResponse = {};
        $rootScope.ticketRequest = {};
        $rootScope.ticketResponse = {};
        $rootScope.TokenId = "";
        $.get("http://ipinfo.io", function(response) {
            console.log('ip address');
            console.log(response.ip);
            window.localStorage['ip_address'] = response.ip;
        }, "jsonp");
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
                if($scope.user_profile.Image==''){
                    $scope.user_profile.Image="assets/theme/img/BlankImages.png";
                }
            });
        }
    });