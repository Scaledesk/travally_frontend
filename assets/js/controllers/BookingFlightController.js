angular.module('Travally')
    .controller('BookingFlightController', function($http, $scope, $routeParams, $auth, $rootScope, $filter, $location, Flight) {
        $scope.passenger =  {
            "adult": window.localStorage['AdultCount'],
            "child":window.localStorage['ChildCount'],
            "infant":window.localStorage['InfantCount'],
            "senior":window.localStorage['SeniorCount']
        };
        $scope.user = {};
        $scope.agree = false;
        $scope.Successful_Message = "";
        $scope.validation_message="";
        $scope.flightData = Flight.getFlightData();
        $scope.bookVal = Flight.getflightBookData();
        //console.log($scope.flightData);
        console.log($scope.bookVal);
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

                if($auth.isAuthenticated()){
                    $scope.flightBooking();
                 }
                else{

                        /*if($scope.user.name ==''){
                            $scope.validation_message = "name is required";
                            return;
                        }
                    if($scope.user.phone ==''){
                        $scope.validation_message = "phone number is required";
                        return;
                    }
                    if($scope.user.email ==''){
                        $scope.validation_message = "email is required";
                        return;
                    }
                    if($scope.agree == false){
                        $scope.validation_message = "Select Create Travally Account";
                        return;
                    }*/

                }
        };
        $scope.flightBooking = function(){
            if($scope.flightData.IsLcc){
                $scope.$emit('LOAD')
                $scope.ticket = {
                    "BookingID": "",
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
                    "CorporateCode": null,
                    "TourCode": null,
                    "Endorsement": null,
                    "PromotionalPlanType": $scope.bookVal.PromotionalPlanType,
                    "MemberMobileNo": $scope.bookVal.MemberMobileNo,
                    "MemberMobilePin": $scope.bookVal.MemberMobilePin
                };
                $rootScope.ticketRequest = $scope.ticket;
                //console.log($scope.ticket);
                Flight.flightTicket($scope.ticket).then(function (ticketResponse) {
                    console.log("ticket response");
                    $rootScope.ticketResponse = ticketResponse.data;
                    console.log(ticketResponse.data);
                    if($rootScope.ticketResponse.Status.Description == Sucessfull){
                        $scope.saveDetails();
                        $scope.Successful_Message = "Ticket Booked";
                    }
                    //console.log($scope.bookVal.passenger);
                    $scope.$emit('UNLOAD')
                }).catch(function (response) {
                    $scope.$emit('UNLOAD')
                    console.log(response);
                });

            }
            else {
                $scope.$emit('LOAD')
                //console.log($scope.bookVal);
                Flight.flightBooking($scope.bookVal).then(function (bookingResponse) {
                    console.log('booking Details');
                    $scope.bookingResponse = bookingResponse.data;
                    if ($scope.bookingResponse.BookingId != null) {
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
                            $rootScope.ticketResponse = ticketResponse.data;

                            if($rootScope.ticketResponse.Status.Description == Sucessfull){
                                $scope.saveDetails();
                                $scope.Successful_Message = "Ticket Booked";
                            }
                            $scope.$emit('UNLOAD')
                        }).catch(function (response) {
                            $scope.$emit('UNLOAD')
                            console.log(response);
                        });
                    }
                    else {
                        console.log('else');
                        console.log($scope.bookingResponse);
                        $scope.$emit('UNLOAD')
                    }
                }).catch(function (response) {
                    $scope.$emit('UNLOAD')
                    console.log(response);
                });
            }
        };

        $scope.saveDetails = function(){

            var saveData = {
                "pnr":$rootScope.ticketResponse.PNR,
                "airline":$scope.bookVal.Segment[0].Airline.AirlineName,
                "booking_id":$rootScope.ticketResponse.BookingId,
                "ssr_denied":$rootScope.ticketResponse.SSRDenied,
                "ssr_prod_type":$rootScope.ticketResponse.ProdType,
                "confirmation_no":$rootScope.ticketResponse.ConfirmationNumber,
                "payment_reference_no":$rootScope.ticketResponse.PaymentReferenceNumber,
                "ref_id":$rootScope.ticketResponse.Status.RefId,
                "status_code":$rootScope.ticketResponse.Status.StatusCode,
                "status_description":$rootScope.ticketResponse.Status.Description,
                "status_category":$rootScope.ticketResponse.Status.Category,
                "source":$scope.bookVal.Segment[0].Origin.CityName,
                "destination":$scope.bookVal.Segment[0].Destination.CityName,
                "departure_date":"2016-10-10"
            };
            console.log(saveData);
            Flight.saveDetails(saveData).then(function (dd) {
                console.log('successfully saved');
                console.log(dd);
            }).catch(function (response){
                console.log(response);
                console.log('some error occurred');
            });
        };






    });

/*var tt = {
    "BookingID": "",
    "Origin": "BOM",
    "Destination": "HYD",
    "Segment": [{
        "SegmentIndicator": 1,
        "Airline": {
            "AirlineCode": "SG",
            "AirlineName": "SpiceJet",
            "AirLineRemarks": "All P class fares are Non-refundable and only include hand baggage.Checkin baggage will be paid at airport @750/15kg. "
        },
        "FlightNumber": "427",
        "FareClass": "P",
        "AirlinePNR": null,
        "Origin": {
            "AirportCode": "BOM",
            "AirportName": "Mumbai",
            "Terminal": "1B",
            "CityCode": "BOM",
            "CityName": "Mumbai",
            "CountryCode": "IN",
            "CountryName": "India"
        },
        "Destination": {
            "AirportCode": "HYD",
            "AirportName": "Shamsabad International Airport",
            "Terminal": "",
            "CityCode": "HYD",
            "CityName": "Hyderabad",
            "CountryCode": "IN",
            "CountryName": "India"
        },
        "DepTIme": "2015-08-31T17:25:00",
        "ArrTime": "2015-08-31T18:45:00",
        "ETicketEligible": true,
        "Duration": "01:20",
        "Stop": 0,
        "Craft": "738",
        "Status": "Confirmed",
        "OperatingCarrier": "SG"
    }],
    "FareType": "PUB",
    "FareRule": [{
        "Origin": "BOM",
        "Destination": "HYD",
        "Airline": "SG",
        "FareRestriction": null,
        "FareBasisCode": "P",
        "FareRuleDetail": null,
        "DepartureDate": "2015-08-31T17:25:00",
        "ReturnDate": "2015-08-31T18:45:00",
        "Source": 2
    }],
    "Fare": {
        "BaseFare": 1203.0,
        "Tax": 696.0,
        "ServiceTax": 0.0,
        "AdditionalTxnFee": 0.0,
        "AgentCommission": 18.04,
        "TdsOnCommission": 3.61,
        "IncentiveEarned": 0.0,
        "TdsOnIncentive": 0.0,
        "PLBEarned": 0.0,
        "TdsOnPLB": 0.0,
        "PublishedPrice": 11902.0,
        "AirTransFee": 0.0,
        "Currency": "INR",
        "Discount": 0.0,
        "ChargeBU": [{"PriceId": 0, "ChargeType": 9, "Amount": 3.0}, {"PriceId": 0, "ChargeType": 0, "Amount": 0.0}],
        "OtherCharges": 20003.0,
        "FuelSurcharge": 0.0,
        "TransactionFee": 0.0,
        "ReverseHandlingCharge": 0.0,
        "OfferedFare": 11883.96,
        "AgentServiceCharge": 10000.0,
        "AgentConvienceCharges": 0.0,
        "Markup": null
    },
    "Passenger": [{
        "Title": "Mr",
        "FirstName": "Nupoora",
        "LastName": "Trivedi",
        "Type": 0,
        "DateOfBirth": "1991-07-22T00:00:00",
        "Fare": {
            "BaseFare": 1203.0,
            "Tax": 696.0,
            "ServiceTax": 0.0,
            "AdditionalTxnFee": 0.0,
            "AgentCommission": 0.0,
            "TdsOnCommission": 0.0,
            "IncentiveEarned": 0.0,
            "TdsOnIncentive": 0.0,
            "PLBEarned": 0.0,
            "TdsOnPLB": 0.0,
            "PublishedPrice": 0.0,
            "AirTransFee": 0.0,
            "Currency": null,
            "Discount": 0.0,
            "ChargeBU": null,
            "OtherCharges": 0.0,
            "FuelSurcharge": 0.0,
            "TransactionFee": 0.0,
            "ReverseHandlingCharge": 0.0,
            "OfferedFare": 0.0,
            "AgentServiceCharge": 0.0,
            "AgentConvienceCharges": 0.0,
            "Markup": null
        },
        "Ssr": null,
        "Gender": 2,
        "PassportNumber": "",
        "PassportExpiry": "0001-01-01T00:00:00",
        "PinCode": "364001",
        "Country": "IN",
        "Phone": "9409081263",
        "AddressLine1": "madhavdarshan",
        "AddressLine2": "madhavdarshan",
        "Email": "demo@dispostable.com",
        "Meal": {"Code": "AVML", "Description": "Asian - Vegetarian"},
        "Seat": {"Code": "A", "Description": "Aisle"},
        "FFAirline": "",
        "FFNumber": ""
    }],
    "Remarks": "test",
    "InstantTicket": true,
    "PaymentInformation": {
        "PaymentInformationId": 0,
        "InvoiceNumber": 0,
        "PaymentId": "0",
        "Amount": 0.0,
        "IPAddress": "172.20.65.108",
        "TrackId": 0,
        "PaymentGateway": 4,
        "PaymentModeType": 2
    },
    "Source": 2,
    "SessionId": "4195877b-3f48-4451-84d2-5e1eaf4b2919",
    "IsOneWayBooking": false,
    "CorporateCode": null,
    "TourCode": null,
    "Endorsement": null,
    "PromotionalPlanType": 0,
    "MemberMobileNo": "",
    "MemberMobilePin": ""
};*/
