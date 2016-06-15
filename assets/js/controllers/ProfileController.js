angular.module('Travally').controller('ProfileController', function ($rootScope,serverConfig,BusServices, $routeParams, $scope, $auth, $location, Profile,Flight) {
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


        Profile.getBusBookingDetails().then(function(response){
            $scope.bus_booking_details = response.data.data;
            console.log(response.data.data);
        }).catch(function(response){
            console.log(response);
        });
    }

    $scope.cancelBooking = function(f){
        $scope.getBooking = {
            "EndUserIp":"127.0.0.1",
            "TokenId":window.localStorage['flight_token_id'],
            "BookingId": f.booking_id,
            "PNR": f.pnr,
            "TraceId":"",
            "MemberMobileNo":serverConfig.memberMobileNumber,
            "MemberMobilePin":serverConfig.memberMobilePin
        };
        Flight.GetBooking($scope.getBooking).then(function(response){
            console.log('true');
            console.log(response);
            $scope.BookingResponse = response.data;
            $scope.cancelFlightBooking();
            //console.log(response.data);
        }).catch(function(response){
            console.log('false');
            console.log(response);
        });
    };

    $scope.cancelBusBooking = function(b){
    var bc = {
        "TicketNo": b.ticket_no,
        "MemberMobileNo":serverConfig.memberMobileNumber,
        "MemberMobilePin":serverConfig.memberMobilePin
        };
        console.log(bc);
        BusServices.CancelBooking(bc).then(function(response){
            console.log(response.data);
            $scope.CancelResponse = response.data;

            //type = "Bus";
            //$scope.saveCancelDetails(type);

        }).catch(function(response){
            console.log(response);
        });
    };

    $scope.cancelFlightBooking = function(){
        $scope.ticketId = [$scope.BookingResponse.Ticket[0].TicketId];
        /*angular.forEach($scope.BookingResponse.Ticket, function (t, key) {
            $scope.ticketId.push(t.TicketId);
        });*/
        $scope.cancel = {
            "BookingId":$scope.BookingResponse.BookingId,
            "RequestType":1,
            "TicketId":$scope.ticketId,
            "Remarks":"TEST",
            "SubAgentID":'',
            "IsFullBookingCancel":true,
            "PNR":$scope.BookingResponse.PNR,
            "MemberMobileNo":serverConfig.memberMobileNumber,
            "MemberMobilePin":serverConfig.memberMobilePin
        };
        Flight.sendChangeRequest($scope.cancel).then(function(response){
            console.log('cancel');
            $scope.cancelResponse = response.data;

            //type = "Flight";
            //$scope.saveCancelDetails(type);

            console.log(response.data);
        }).catch(function(response){
            $scope.cancelResponse = response.data;
            console.log(response);
        });
    };


    $scope.saveCancelDetails = function(type){
        if(type=='Bus'){
            var c = {
                "type":type,
                "status":$scope.CancelResponse.IsCancellationSuccess,
                "cancellation_tax_no":$scope.CancelResponse.CancellationTaxNo,
                "refund_amount":$scope.CancelResponse.RefundAmount,
                "cancellation_charge":$scope.CancelResponse.CancellationCharge
            };
            Profile.saveCancellationDetails(c).then(function(data){
                console.log(data);
                $scope.cancellation_details_saved = true;
            }).catch(function(response){
                console.log(response);
            });
        }
        if(type=='Flight'){
            var cancel = {
                "type":type,
                "status":$scope.cancelResponse.Status.Description,
                "cancellation_id":$scope.cancelResponse.ChangeRequestId
            };
            Profile.saveCancellationDetails(cancel).then(function(data){
                console.log(data);
                $scope.cancellation_details_saved = true;
            }).catch(function(response){
                console.log(response);
            });
        }
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