angular.module('Travally').controller('ProfileController', function ($rootScope, $routeParams, $scope, $auth, $location, Profile) {

    $scope.user = {};
    $scope.target = $routeParams.target;
    $scope.ss = 'first';
console.log($routeParams.target);
    $scope.changeAction=function(value){
        $location.path('/profile/'+value);
    };

    /**
     * function for getting user profile details
     * @Author Javed
     */
        Profile.get().then(function (d) {
            $scope.profile = d.data.data;
            if($scope.profile.Image==''){
                $scope.profile.Image="assets/theme/img/BlankImages.png";
            }
            $scope.user.name = $scope.profile.Name;
            $scope.user.address = $scope.profile.Address;
            $scope.user.dob = $scope.profile.DOB;
        });


    if($scope.target == 'booking-history'){
        Profile.getFlightBookingDetails().then(function(response){
            $scope.flight_booking_details = response.data.data;
            console.log(response.data.data);
        }).catch(function(response){
            console.log(response);
        });
    }

    $scope.cancelBooking = function(f){

        var b = {
            "BookingId":"15384002",
            "Pnr":"76H9TW",
            "Source":0,
            "LastName":"",
            "TicketId":0,
            "MemberMobileNo":"9188888888",
            "MemberMobilePin":"1234"
        };
        var cancel = {

        };
        Profile.cancelBooking(cancel).then(function(response){
            $scope.cancelResponse = response.data;
            console.log(response.data);
        }).catch(function(response){
            console.log(response);
        });

    };

    $scope.update_success = false;
    /**
     * function for updating user profiles
     * @param data
     * @Author Javed
     */
    $scope.updateProfile = function(data){
        Profile.update(data).then(function(){
            $scope.update_success = true;
        }).catch(function(response){
            console.log('unknown error');
        });
    };

    $scope.password_change_success = false;
    $scope.password_change_error = false;
    /**
     * * function for change Password
     * @param pass
     * @Author Javed
     */
    $scope.changePassword = function(pass){
        Profile.changePassword(pass).then(function(){
            $scope.password_change_success = true;
        }).catch(function(response){
            $scope.password_change_error = true;
            console.log('unknown error');
        });
    };

});