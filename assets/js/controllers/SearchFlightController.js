angular.module('Travally')
    .controller('SearchFlightController', function($http, $scope,$cookies, $routeParams, $filter, $location, Flight, $rootScope, serverConfig) {
        $scope.checkboxModel = {
            "fareClass":""
        };
        $scope.fareStop = {
            "stop":""
        };
        $scope.source = $routeParams.source;
        $scope.destination = $routeParams.destination;
        $scope.departureDate = $routeParams.departureDate;
        $scope.passenger = $routeParams.passenger;
        $scope.sortType     = "duration";
        $scope.sortReverse  = false;
        /*var flightData = {
            "Origin": $scope.source,
            "Destination": $scope.destination,
            "DepartureDate": $scope.departureDate,
            "Type": 0,
            "ReturnDate": "",
            "CabinClass": 2,
            "PreferredCarrier": "",
            "AdultCount": $scope.passenger,
            "ChildCount": 1,
            "InfantCount": 1,
            "SeniorCount": 0,
            "PromotionalPlanType": 0,
            "PromotionalCode": null,
            "IsDirectFlight": false,
            "FlightSegments": null,
            "DepartureDateString":$filter('date')($scope.departureDate, 'dd/MM/yyyy'),
            "ReturnDateString": "",
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };*/

        //"72a4eea8-46f3-45c7-80b0-4ef81fbe7ab1"
        /*var dddd = {
            "JourneyType": 1,
            "AdultCount": 1,
            "ChildCount": 0,
            "InfantCount": 0,
            "DirectFlight": false,
            "OneStopFlight": false,
            "Segments": [
                {
                    "Origin": "DEL",
                    "Destination": "BLR",
                    "PreferredDepartureTime": "2016-08-08T00:00:00",
                    "PreferredArrivalTime": "2016-08-08T00:00:00",
                    "FlightCabinClass": ""
                }
            ],
            "EndUserIp": "127.0.0.1",
            "TokenId": window.localStorage['token_id'],
            "PreferredAirlines": null,
            "Sources": null,
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };*/


        var dddd = {
            "JourneyType": 1,
            "AdultCount": 1,
            "ChildCount": 0,
            "InfantCount": 0,
            "DirectFlight": false,
            "OneStopFlight": false,
            "Segments": [
                {
                    "Origin": "DEL",
                    "Destination": "BLR",
                    "PreferredDepartureTime": $scope.departureDate,
                    "PreferredArrivalTime": "2016-08-08T00:00:00",
                    "FlightCabinClass": "1"
                }
            ],
            "EndUserIp": "127.0.0.1",
            "TokenId":window.localStorage['flight_token_id'],
            "PreferredAirlines": null,
            "Sources": null,
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };


        /*var flightDataDemo = {
            "Origin":"BOM",
            "Destination":"DEL",
            "DepartureDate":"0001-01-01T00:00:00",
            "Type":0,
            "ReturnDate":"0001-01-01T00:00:00",
            "CabinClass":0,"PreferredCarrier":"",
            "AdultCount":1,
            "ChildCount":0,
            "InfantCount":0,
            "SeniorCount":0,
            "PromotionalPlanType":0,
            "PromotionalCode":null,
            "IsDirectFlight":false,
            "FlightSegments":null,
            "DepartureDateString":$scope.departureDate,
            "ReturnDateString":"",
            "MemberMobileNo":serverConfig.memberMobileNumber,
            "MemberMobilePin":serverConfig.memberMobilePin
        };*/

        $scope.flightResultData =[];
        $scope.$emit('LOAD')
        console.log('search request');
        console.log(dddd);
        Flight.searchFlight(dddd).then(function (d) {
            $scope.sessionId = d.data.SessionId;
            $rootScope.flightSearch = d;
            $scope.flightData = d.data.Results[0];
            console.log('search result');
            console.log(d);
            window.localStorage['flight_trace_id']=d.data.TraceId;
            $scope.$emit('UNLOAD')

            /*angular.forEach($scope.flightData, function (flight, key) {
                console.log('dcbcvddgcvc');
                var fareRequest = {
                    EndUserIP:"127.0.0.1",
                    TokenId:window.localStorage['flight_token_id'],
                    TraceId:window.localStorage['flight_trace_id'],
                    ResultIndex:flight.ResultIndex,
                    "MemberMobileNo": serverConfig.memberMobileNumber,
                    "MemberMobilePin": serverConfig.memberMobilePin
                };
                Flight.flightGetFareQuote(fareRequest).then(function(res){
                    console.log('success response');
                    console.log(JSON.stringify(res));
                    var a = res.data.Results;
                    $scope.flightResultData.push(a);
                }).catch(function(res){
                    console.log('error response');
                    console.log(JSON.stringify(res));
                });
            });*/



        }).catch(function (response) {
            $scope.$emit('UNLOAD')
            console.log(response);
        });

        $scope.bookingDetails = function(data) {

            $cookies.putObject('selectedFlight',data);
            $location.path('/bookingDetail');
            /*if (!data.IsLcc) {
                angular.forEach($scope.flightData, function (flight, key) {
                    if (flight.SegmentKey == data.key) {
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
                        };
                        Flight.setflightBookData(bookVal);
                        Flight.setFlightData(data);
                        $location.path('/bookingDetail');
                    }
                });
            }
            else{
                angular.forEach($scope.flightData, function (flight, key) {
                    if (flight.SegmentKey == data.key) {

                        console.log(flight.SegmentKey);
                        console.log(data.key);

                        $scope.getFareQuote = {
                            "sessionId":$scope.sessionId,
                            "Result":[flight],
                            "MemberMobileNo": serverConfig.memberMobileNumber,
                            "MemberMobilePin": serverConfig.memberMobilePin
                        };

                        $rootScope.getFareQuoteRequest = $scope.getFareQuote;

                        Flight.flightGetFareQuote($scope.getFareQuote).then(function (fareQuoteResponse) {
                            console.log('getFare Quote');
                            $scope.fareQuoteResponse = fareQuoteResponse.data;
                            $rootScope.getFareQuoteResponse = fareQuoteResponse;
                            if($scope.fareQuoteResponse.Status.Description = "Successful") {
                                var getFareRule = {
                                    "SessionId": $scope.sessionId,
                                    "Result": $scope.fareQuoteResponse.Result,
                                    "MemberMobileNo": serverConfig.memberMobileNumber,
                                    "MemberMobilePin": serverConfig.memberMobilePin
                                };
                                Flight.searchGetFareRule(getFareRule).then(function (fareRuleResponse) {
                                    console.log("getFareRule success");
                                   // console.log(fareRuleResponse);
                                    bookVal = {
                                        "Remarks":"test",
                                        "InstantTicket":true,
                                        "Fare":$scope.fareQuoteResponse.Result.Fare,
                                        "Passenger":[],
                                        "Origin": data.origin,
                                        "Destination": data.destination,
                                        "Segment": $scope.fareQuoteResponse.Result.Segment,
                                        "FareType":"PUB",
                                        "FareRule": fareRuleResponse.data.FareRules,
                                        "Source":$scope.fareQuoteResponse.Result.Source,
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
                                        "PromotionalPlanType": $scope.fareQuoteResponse.Result.PromotionalPlanType,
                                        "SegmentKey": data.key,
                                        "MemberMobileNo": serverConfig.memberMobileNumber,
                                        "MemberMobilePin": serverConfig.memberMobilePin
                                    };

                                    console.log('bookval');
                                    console.log(bookVal);

                                    console.log('data');
                                    console.log(data);

                                    console.log('fare quote response');
                                    console.log($scope.fareQuoteResponse.Result);


                                    Flight.setflightBookData(bookVal);
                                    Flight.setFlightData($scope.fareQuoteResponse.Result);
                                    $location.path('/bookingDetail');
                                }).catch(function (response) {
                                    console.log("getFareRule error");
                                    console.log(response);
                                });
                            }
                            console.log(fareQuoteResponse);
                        }).catch(function (response) {
                            console.log(response);
                        });
                    }
                });
            }*/
        };
        $scope.filterFlightDetail=function(){
            $scope.flightResult = $filter('filter')($scope.flightResultData,{fareClass:$scope.checkboxModel.fareClass,stop:$scope.fareStop.stop})
        }
    });


