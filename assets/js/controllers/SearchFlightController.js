angular.module('Travally')
    .controller('SearchFlightController', function($http, $scope, $routeParams, $filter, $location, Flight, $rootScope, serverConfig) {
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
        var flightDataDemo = {
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
        };

        $scope.flightResultData =[];
        $scope.$emit('LOAD')
        Flight.searchFlight(flightDataDemo).then(function (d) {
            $scope.sessionId = d.data.SessionId;

            $rootScope.flightSearch = d;

            $scope.flightData = d.data.Result;
            //console.log(d.data.Result);
            $scope.$emit('UNLOAD')
            angular.forEach($scope.flightData, function (flight, key) {
                /*var getFareRule =  {
                    "SessionId":$scope.sessionId,
                    "Result":flight,
                    "MemberMobileNo": serverConfig.memberMobileNumber,
                    "MemberMobilePin": serverConfig.memberMobilePin
                };
                Flight.searchGetFareRule(getFareRule).then(function (fareRuleResponse) {
                    console.log("getFareRule success");
                 console.log(fareRuleResponse);
                 }).catch(function (response) {
                    console.log("getFareRule error");
                    console.log(response);
                 });*/
                angular.forEach(flight.Segment, function (segment, key) {
                    airlineCode = segment.Airline.AirlineCode;
                    airlineName = segment.Airline.AirlineName;
                    flightNumber = segment.FlightNumber;
                    fareClass = segment.FareClass;
                    sourceAirportName = segment.Origin.AirportName;
                    terminal = segment.Origin.Terminal;
                    sourceCityName = segment.Origin.CityName;
                    countryName = segment.Origin.CountryName;
                    destinationAirportName = segment.Destination.AirportName;
                    destinationAirportTerminal = segment.Destination.Terminal;
                    destinationCityName = segment.Destination.CityName;
                    departureTime = segment.DepTIme;
                    arrivalTime = segment.ArrTime;
                    status = segment.Status;
                    stop = segment.Stop;
                    destinationCountryName = segment.Destination.CountryName;
                });
            var vv={
                "origin":flight.Origin,
                "destination":flight.Destination,
                "TripIndicator":flight.TripIndicator,
                "airlineCode":airlineCode,
                "airlineName":airlineName,
                "flightNumber":flightNumber,
                "fareClass":fareClass,
                "sourceAirtportName":sourceAirportName,
                "sourceAirtportTerminal":terminal,
                "sourceCityName":sourceCityName,
                "sourceCountryName":countryName,
                "destinationAirtportName":destinationAirportName,
                "destinattionAirtportTerminal":destinationAirportTerminal,
                "destinattionCityName":destinationCityName,
                "destinattionCountryName":destinationCountryName,
                "departureTime":departureTime,
                "arrivalTime":arrivalTime,
                "status":status,
                "baseFare":flight.Fare.BaseFare,
                "tax":flight.Fare.Tax,
                "agentCommission":flight.Fare.AgentCommission,
                "otherCommission":flight.Fare.TdsOnCommission,
                "publishFare":flight.Fare.PublishedPrice,
                "offeredFare":flight.Fare.OfferedFare,
                "duration":flight.ObDuration,
                "IsLcc":flight.IsLcc,
                "stop":stop,
                "FareBreakdown":flight.FareBreakdown,
                "key":flight.SegmentKey
            };
                $scope.flightResultData.push(vv);
                $scope.flightResult = $scope.flightResultData;
                $scope.$emit('UNLOAD')
            });
        }).catch(function (response) {
            $scope.$emit('UNLOAD')
            console.log(response);
        });

        $scope.bookingDetails = function(data) {
            if (!data.IsLcc) {
                //window.localStorage['flight'] = data;
                angular.forEach($scope.flightData, function (flight, key) {
                    if (flight.SegmentKey == data.key) {
                     /*   window.localStorage['AdultCount'] = $scope.passenger;
                        window.localStorage['ChildCount'] = 0;
                        window.localStorage['InfantCount'] = 0;
                        window.localStorage['SeniorCount'] = 0;*/

                        /*"Remarks": "test",
                         "InstantTicket": true,
                         "Fare": flight.Fare,
                         "Passenger": [],
                         "Origin": data.origin,
                         "Destination": data.destination,
                         "Segment": flight.Segment,
                         "FareType": "PUB",
                         "FareRule": flight.FareRule,
                         "Source": 0,
                         */


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
            }
        };
        $scope.filterFlightDetail=function(){
            $scope.flightResult = $filter('filter')($scope.flightResultData,{fareClass:$scope.checkboxModel.fareClass,stop:$scope.fareStop.stop})
        }
    });


