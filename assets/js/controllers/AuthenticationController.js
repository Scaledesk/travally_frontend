angular.module('Travally').controller('AuthenticationController', function ($rootScope,$scope, $auth, $location, Profile) {
    $scope.showpassword = 0;
    if($auth.isAuthenticated())
    {
        console.log('authenticated');
        $location.path('/');
    }

    $scope.forgot_password_text=false;
    $scope.forgotPassword = function(email){
        Profile.forgotPassword(email).then(function(data){
            console.log(data);
            $scope.forgot_password_text=true;
            return;
        })
        .catch(function(){

        });
    };






    $scope.login_text = 'Sign In';
    $scope.disabled = false;
    $scope.login = function(){

        if($scope.email == undefined || $scope.email == '')
        {
            //console.log("a");
            $scope.error_email_required = true;
            return;
        }
        if($scope.password == undefined || $scope.password == '')
        {
            $scope.error_password_required = true;
            return;
        }
        if($scope.email != undefined)
        {if($scope.email.indexOf("@") == -1 || $scope.email.indexOf(".") == -1 )
        {
            $scope.error_email_invalid = true;
            return;
        }
        }

        var user = {
            username: $scope.email,
            password: $scope.password,
            client_id:"client_user",
            client_secret:"client_secret",
            grant_type:"password"
        };
        $scope.login_text = 'Please Wait...';
        $scope.disabled = true;
        $auth.login(user)
            .then(function(response) {
                $scope.social_user = false;
                $scope.login_text = 'Sign In';
                $scope.disabled = false;

                Profile.get().then(function(d){
                    $rootScope.user_profile = d.data.data;
                    if($rootScope.user_profile.Image ==''){
                        $rootScope.user_profile.Image="assets/theme/img/BlankImages.png";
                    }
                    if(window.localStorage['url']!=''){
                        var url = window.localStorage['url'];
                        window.localStorage['url'] =  '';
                        $location.path(url);
                    }else {
                        $location.path('/');
                    }
                });
                /* .catch(function(response) {
                 console.log('error login');
                 });*/

            })
            .catch(function(response) {
                 //Handle errors here, such as displaying a notification
                 //for invalid email and/or password.
                $scope.error = true;
                $scope.login_text = 'Sign In';
                $scope.disabled = false;
                console.log('error login');
            });
      };
        $scope.authenticate = function (provider) {
        $auth.authenticate(provider)
            .then(function (response) {
                var user = {
                    client_id:"client_user",
                    client_secret:"client_secret",
                    social_auth_provider:response.data.social_auth_provider,
                    social_auth_provider_id:response.data.social_auth_provider_id,
                   social_auth_provider_access_token:response.data.social_auth_provider_access_token,
                    grant_type:"social"
                };
                console.log(user);
                $auth.login(user)
                    .then(function(response) {
                        $scope.social_user = true;
                        Profile.get().then(function(d){
                            $rootScope.user_profile = d.data.data;
                            if($rootScope.user_profile.Image ==''){
                                $rootScope.user_profile.Image="assets/theme/img/BlankImages.png";
                            }
                            if(window.localStorage['url']!=''){
                                var url = window.localStorage['url'];
                                window.localStorage['url'] =  '';
                                $location.path(url);
                            }else {
                                $location.path('/');
                            }
                        });
                           /* .catch(function(response) {
                                console.log('error login');
                            });*/
                    })
                    .catch(function(response) {
                        console.log('error login');
                    });

            }).catch(function(response){
                console.log('error');
            });
    };
});