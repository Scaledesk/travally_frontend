angular.module('Travally')
    .controller('BookingFlightController', function($http, $scope, $routeParams, $filter, $location, Flight) {
        $scope.passenger =  {
            "adult": window.localStorage['AdultCount'],
            "child":window.localStorage['ChildCount'],
            "infant":window.localStorage['InfantCount'],
            "senior":window.localStorage['SeniorCount']
        };
        $scope.flightData = Flight.getFlightData();
        $scope.bookVal = Flight.getflightBookData();
        //console.log($scope.flightData);

        angular.forEach($scope.flightData.FareBreakdown, function (f, key) {

            p =  {
                "Title":"Mr",
                "FirstName":"Trivedi",
                "LastName":"Nupoora",
                "Type":0,
                "DateOfBirth":"2003-06-19T00:00:00",
                "Fare":{
                    "BaseFare": f.BaseFare,
                    "Tax": f.Tax,
                    "ServiceTax":0.0,
                    "AdditionalTxnFee": f.AdditionalTxnFee,
                    "AgentCommission":0.0,
                    "TdsOnCommission":0.0,
                    "IncentiveEarned":0.0,
                    "TdsOnIncentive":0.0,
                    "PLBEarned":0.0,
                    "TdsOnPLB":0.0,
                    "PublishedPrice":0.0,
                    "AirTransFee": f.AirlineTransFee,
                    "Currency":null,
                    "Discount":0.0,
                    "ChargeBU":null,
                    "OtherCharges":0.0,
                    "FuelSurcharge": f.FuelSurcharge,
                    "TransactionFee":0.0,
                    "ReverseHandlingCharge":0.0,
                    "OfferedFare":0.0,
                    "AgentServiceCharge": f.AgentServiceCharge,
                    "AgentConvienceCharges": f.AgentConvienceCharges,
                    "Markup":null
                },
                "Ssr":null,
                "Gender":1,
                "PassportNumber":"",
                "PassportExpiry":"0001-01-01T00:00:00",
                "PinCode":"364270",
                "Country":"IN",
                "Phone":"7878127048",
                "AddressLine1":"demo",
                "AddressLine2":"demo",
                "Email":"abc@jbspl.com",
                "Meal":{
                    "Code":"AVML",
                    "Description":"Asian - Vegetarian"
                },
                "Seat":{
                    "Code":"A",
                    "Description":"Aisle"
                },
                "FFAirline":"",
                "FFNumber":""
            };
            $scope.bookVal.Passenger.push(p);
        });

        $scope.BookFlight = function(){
            $scope.$emit('LOAD')
            console.log($scope.bookVal);
            Flight.flightBooking($scope.bookVal).then(function (bookingResponse) {
                console.log('booking Details');
                $scope.bookingResponse = bookingResponse.data;
                if($scope.bookingResponse.BookingId != null) {
                    console.log('if');
                    var ticket = {
                        "BookingID": $scope.bookingResponse.BookingId,
                        "Origin": $scope.bookVal.Origin,
                        "Destination": $scope.bookVal.Destination,
                        "Segment": $scope.bookVal.Segment,
                        "FareType": $scope.bookVal.FareType,
                        "FareRule": $scope.bookVal.FareRule,
                        "Fare": $scope.bookVal.Fare,
                        "Passenger": $scope.bookVal.Passenger,
                        "Remarks": $scope.bookVal.Remarks,
                        "InstantTicket": $scope.bookVal.InstantTicket,
                        "PaymentInformation": $scope.bookVal.PaymentInformation,
                        "Source": $scope.bookVal.Source,
                        "SessionId": $scope.bookVal.SessionId,
                        "IsOneWayBooking": true,
                        "CorporateCode": "",
                        "TourCode": "",
                        "Endorsement": "",
                        "PromotionalPlanType": $scope.bookVal.PromotionalPlanType,
                        "MemberMobileNo": $scope.bookVal.MemberMobileNo,
                        "MemberMobilePin": $scope.bookVal.MemberMobilePin
                    };
                        console.log(ticket);
                    Flight.flightTicket(ticket).then(function (ticketResponse) {
                        $scope.ticketDetails = ticketResponse.data;
                        $scope.$emit('UNLOAD')
                    }).catch(function (response) {
                        $scope.$emit('UNLOAD')
                        console.log(response);
                    });
                }
                else{
                    console.log('else');
                    console.log($scope.bookingResponse);
                    $scope.$emit('UNLOAD')
                }
            }).catch(function (response) {
                $scope.$emit('UNLOAD')
                console.log(response);
            });
        };
    });




/*
bookVal = {
    "Remarks":"test",
    "InstantTicket":true,
    "Fare":flight.Fare,
    "Passenger":[],
    "Origin": data.origin,
    "Destination": data.destination,
    "Segment": flight.Segment,
    "FareType":"PUB",
    "FareRule": flight.FareRule,
    "Source":3,
    "PaymentInformation":{
        "PaymentInformationId":0,
        "InvoiceNumber":0,
        "PaymentId":"0",
        "Amount":0.0,
        "IPAddress":"127.0.0.1",
        "TrackId":0,
        "PaymentGateway":4,
        "PaymentModeType":2
    },
    "SessionId": $scope.sessionId,
    "PromotionalPlanType": flight.PromotionalPlanType,
    "SegmentKey": data.key,
    "MemberMobileNo": serverConfig.memberMobileNumber,
    "MemberMobilePin": serverConfig.memberMobilePin
};*/




