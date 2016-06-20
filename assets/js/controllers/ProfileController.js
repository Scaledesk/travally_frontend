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
        //$scope.ticketId = $scope.BookingResponse.Ticket.TicketNumber;
        /*angular.forEach($scope.BookingResponse.Ticket, function (t, key) {
            $scope.ticketId.push(t.TicketId);
        });*/
        $scope.cancel = {
            "EndUserIp":"127.0.0.1",
            "TokenId":window.localStorage['flight_token_id'],
            "BookingId":$scope.BookingResponse.BookingId,
            "RequestType":1,
            "CancellationType":0,
            "TicketId":$scope.BookingResponse.FlightItinerary.Passenger[0].Ticket.TicketId,
            "Remarks":"TEST",
            "PNR":$scope.BookingResponse.PNR,
            "MemberMobileNo":serverConfig.memberMobileNumber,
            "MemberMobilePin":serverConfig.memberMobilePin
        };
        Flight.sendChangeRequest($scope.cancel).then(function(response){
            console.log('cancel');
            $scope.cancelResponse = response.data;

            var type = "Flight";
            $scope.saveCancelDetails(type);

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


    var dd = {
        "TraceId": "cc24888e-853b-4132-955b-90aea4ed720f",
        "ResponseStatus": 1,
        "FlightItinerary": {
            "Origin": "DEL",
            "Status": 5,
            "Fare": {
                "ServiceFee": 10000.0,
                "CommissionEarned": 38.75,
                "AdditionalTxnFee": 0.0,
                "TdsOnIncentive": 0.0,
                "AdditionalTxnFeeOfrd": 0.0,
                "TdsOnPLB": 4.82,
                "ChargeBU": [{"value": 9.11, "key": "MARKUP"}, {
                    "value": 0.0,
                    "key": "CONVENIENCECHARGE"
                }, {"value": 50.0, "key": "OTHERCHARGE"}],
                "Tax": 827.0,
                "Discount": 0.0,
                "IncentiveEarned": 0.0,
                "PublishedFare": 13336.11,
                "YQTax": 100.0,
                "Currency": "INR",
                "OfferedFare": 3273.25,
                "BaseFare": 2450.0,
                "AdditionalTxnFeePub": 0.0,
                "PLBEarned": 24.11,
                "TdsOnCommission": 7.75,
                "OtherCharges": 59.11
            },
            "BookingId": 186118,
            "FareType": "PUB",
            "NonRefundable": false,
            "Passenger": [{
                "City": "Delhi",
                "FirstName": "Trivedi",
                "Title": "Mr",
                "LastName": "Nupoora",
                "DateOfBirth": null,
                "PaxId": 252756,
                "Email": "abc@jbspl.com",
                "Fare": {
                    "ServiceFee": 10000.0,
                    "CommissionEarned": 38.75,
                    "AdditionalTxnFee": 0.0,
                    "TdsOnIncentive": 0.0,
                    "AdditionalTxnFeeOfrd": 0.0,
                    "TdsOnPLB": 4.82,
                    "ChargeBU": [{"value": 9.11, "key": "MARKUP"}, {
                        "value": 0.0,
                        "key": "CONVENIENCECHARGE"
                    }, {"value": 50.0, "key": "OTHERCHARGE"}],
                    "Tax": 827.0,
                    "Discount": 0.0,
                    "IncentiveEarned": 0.0,
                    "PublishedFare": 13336.11,
                    "YQTax": 100.0,
                    "Currency": "INR",
                    "OfferedFare": 3273.25,
                    "BaseFare": 2450.0,
                    "AdditionalTxnFeePub": 0.0,
                    "PLBEarned": 24.11,
                    "TdsOnCommission": 7.75,
                    "OtherCharges": 59.11
                },
                "CountryCode": "IN",
                "AddressLine2": "demo",
                "AddressLine1": "demo",
                "Nationality": "IN",
                "Ticket": {
                    "Status": "OK",
                    "TicketNumber": "X263WR",
                    "ServiceFeeDisplayType": "ShowInTax",
                    "Remarks": "",
                    "ValidatingAirline": "708",
                    "TicketId": 168952,
                    "IssueDate": "06/15/2016 12:13:21"
                },
                "IsLeadPax": true,
                "FFAirlineCode": null,
                "Gender": 1,
                "Baggage": null,
                "PassportNo": "",
                "MealDynamic": null,
                "Meal": {"Code": null, "Description": null},
                "PaxType": 1,
                "SegmentAdditionalInfo": [{"Baggage": "20 Kg", "Meal": "", "NVB": null, "NVA": null, "FareBasis": "M"}],
                "ContactNo": "8787878787",
                "FFNumber": ""
            }],
            "FareRules": [{
                "Origin": "DEL",
                "FareBasisCode": "M",
                "FareRestriction": "",
                "Destination": "LKO",
                "FareRuleDetail": "Fare rules for 6E",
                "Airline": "6E"
            }],
            "Segments": [{
                "Origin": {
                    "Airport": {
                        "CountryName": "India",
                        "CityCode": "DEL",
                        "CountryCode": "IN",
                        "CityName": "Delhi",
                        "Terminal": "1D",
                        "AirportCode": "DEL",
                        "AirportName": "Indira Gandhi Airport"
                    }, "DepTime": "06/19/2016 21:40:00"
                },
                "Craft": "320",
                "Remark": null,
                "StopPoint": "",
                "FlightStatus": "Confirmed",
                "SegmentIndicator": 1,
                "IsETicketEligible": false,
                "Destination": {
                    "ArrTime": "06/19/2016 22:45:00",
                    "Airport": {
                        "CountryName": "India",
                        "CityCode": "LKO",
                        "CountryCode": "IN",
                        "CityName": "Lucknow",
                        "Terminal": "  ",
                        "AirportCode": "LKO",
                        "AirportName": "Amausi"
                    }
                },
                "AirlinePNR": "",
                "TripIndicator": 1,
                "StopOver": false,
                "Status": "HK",
                "Mile": "0",
                "Airline": {
                    "AirlineCode": "6E",
                    "OperatingCarrier": "",
                    "AirlineName": "IndiGo",
                    "FlightNumber": 528,
                    "FareClass": "M"
                },
                "Duration": "65",
                "StopPointArrivalTime": null,
                "GroundTime": "0",
                "StopPointDepartureTime": null
            }],
            "Destination": "LKO",
            "ValidatingAirlineCode": "6E",
            "InvoiceCreatedOn": "06/15/2016 12:13:21",
            "Source": 6,
            "AirlineCode": "6E",
            "InvoiceNo": "DW/1617/4385",
            "IsDomestic": true,
            "AirlineRemark": "",
            "IsLCC": true,
            "PNR": "X263WR"
        },
        "Error": {"ErrorCode": 0, "ErrorMessage": ""}
    }


});