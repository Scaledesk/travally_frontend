angular.module('Travally')
    .controller('BookingFlightController', function($http, $scope, $routeParams,$cookies, $auth, $rootScope,serverConfig, $filter, $location, Flight) {
        $scope.selectedFlightDetails = $cookies.getObject('selectedFlight');
        $scope.flightData = $cookies.getObject('selectedFlight');
        var fareRequest = {
            EndUserIP:"127.0.0.1",
            TokenId:window.localStorage['flight_token_id'],
            TraceId:window.localStorage['flight_trace_id'],
            ResultIndex:$scope.flightData.ResultIndex,
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };
        $scope.bookVal = {
            EndUserIP: "127.0.0.1",
            TokenId: window.localStorage['flight_token_id'],
            TraceId: window.localStorage['flight_trace_id'],
            ResultIndex: $scope.selectedFlightDetails.ResultIndex,
            Passengers: [],
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };
        console.log('gat fare quote request ');
        console.log(JSON.stringify(fareRequest));
            console.log('get fare quote response');
            Flight.flightGetFareQuote(fareRequest).then(function(res){
                console.log('success response');
                console.log(JSON.stringify(res));
                $scope.finalResults =  res.data.Results;
                angular.forEach(res.data.Results.FareBreakdown, function (f, key) {
                    console.log('fare breakdown');
                    console.log(f);
                   var p =  {
                        title: "Mr",
                        FirstName: "Trivedi",
                        LastName: "Nupoora",
                        PaxType: "1",
                        DateOfBirth: "2003-06-19T00:00:00",
                        Gender: "Male",
                        PassportNo: "",
                        PassportExpiry: "",
                        AddressLine1: "demo",
                        AddressLine2: "demo",
                        City: "Delhi",
                        CountryCode: "IN",
                        CountryName: "India",
                        ContactNo: "8787878787",
                        Email: "abc@jbspl.com",
                        IsLeadPax: true,
                        FFAirline: "",
                        FFNumber: "",
                        Fare: $scope.finalResults.Fare,
                        Meal: null,
                        Seat:null
                    };
                    $scope.bookVal.Passengers.push(p);
                });
            }).catch(function(res){
                console.log('error response');
                console.log(JSON.stringify(res));
            });
            /*"Remarks":"test",
            "InstantTicket":true,
            "Fare":$scope.flightData.Fare,
            "Passenger":[],
            "Origin": $scope.flightData.origin,
            "Destination": $scope.flightData.destination,
            "Segment": $scope.flightData.Segment,
            "FareType":"PUB",
            "FareRule": $scope.flightData.FareRule,
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
            "PromotionalPlanType": $scope.flightData.PromotionalPlanType,
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": $scope.flightData.memberMobilePin*/

        $scope.user = {};
        $scope.Successful_Message = "";
        console.log('selected flight');
        console.log($scope.flightData);

/*

var d = {
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
*/


        $scope.BookFlight = function(){

                if($auth.isAuthenticated()){
                    $scope.flightBooking();
                 }
                else{

                }
        };
        $scope.flightBooking = function(){
            if($scope.flightData.IsLCC){
                $scope.$emit('LOAD')
                /*$scope.ticket = {
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
                };*/
                //$rootScope.ticketRequest = $scope.ticket;
                var t ={
                    "type":"flight_booking_lcc",
                    "amount":$scope.finalResults.Fare.PublishedFare,
                    "status":"pending",
                    "booking_request":$scope.bookVal
                };
                Flight.AddTransaction(t).then(function (PaymentResponse) {
                    console.log("ticket response");
                    console.log(PaymentResponse);
                    window.location.assign("http://localhost:8000/bookingPayment/"+PaymentResponse.data.data.id+"?access_token="+$auth.getToken());
                    $scope.$emit('UNLOAD')
                }).catch(function (response) {
                    $scope.$emit('UNLOAD')
                    console.log(response);
                });
            }
            else {
                $scope.$emit('LOAD')
                var t1 ={
                    "type":"flight_booking",
                    "amount":$scope.finalResults.Fare.PublishedFare,
                    "status":"pending",
                    "booking_request":$scope.bookVal
                };
                Flight.AddTransaction(t1).then(function (PaymentResponse) {
                    console.log("ticket response");
                    console.log(PaymentResponse);
                    window.location.assign("http://localhost:8000/bookingPayment/"+PaymentResponse.data.data.id+"?access_token="+$auth.getToken());
                    $scope.$emit('UNLOAD')
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
                "source_value" : $scope.bookVal.Source,
                "departure_date":$scope.bookVal.Segment[0].DepTIme
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
