angular.module('Travally')
    .controller('SearchFlightController', function($http, $scope, $routeParams, $filter, $location, Flight, serverConfig) {
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
console.log($scope.source);
console.log($scope.destination);
console.log($scope.departureDate);
console.log($scope.passenger);
        $scope.sortType     = "duration";
        $scope.sortReverse  = false;
        var flightData = {
            "Origin": $scope.source,
            "Destination": $scope.destination,
            "DepartureDate": $scope.departureDate,
            "Type": 0,
            "ReturnDate": "",
            "CabinClass": 2,
            "PreferredCarrier": "",
            "AdultCount": $scope.passenger,
            "ChildCount": 0,
            "InfantCount": 0,
            "SeniorCount": 0,
            "PromotionalPlanType": 0,
            "PromotionalCode": null,
            "IsDirectFlight": false,
            "FlightSegments": null,
            "DepartureDateString":$filter('date')($scope.departureDate, 'dd/MM/yyyy'),
            "ReturnDateString": "",
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };
        $scope.flightResultData =[];
        $scope.$emit('LOAD')
        Flight.searchFlight(flightData).then(function (d) {
            $scope.sessionId = d.data.SessionId;
            $scope.flightData = d.data.Result;

            angular.forEach($scope.flightData, function (flight, key) {
                var getFareRule =  {
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
                 });
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
                "isLcc":flight.IsLcc,
                "stop":stop,
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
            if (!data.isLcc) {
                window.localStorage['flight'] = data;
                angular.forEach($scope.flightData, function (flight, key) {

                    if (flight.SegmentKey == data.key) {
                        window.localStorage['AdultCount'] = $scope.passenger;
                        window.localStorage['ChildCount'] = 0;
                        window.localStorage['InfantCount'] = 0;
                        window.localStorage['SeniorCount'] = 0;
                        bookVal = {
                            "Remarks": "",
                            "InstantTicket": true,
                            "Fare": flight.Fare,
                            "Passenger": [],
                            "Origin": data.origin,
                            "Destination": data.destination,
                            "Segment": flight.Segment,
                            "FareType": "PUB",
                            "FareRule": flight.FareRule,
                            "Source": 0,
                            "PaymentInformation": {
                                "PaymentInformationId": "",
                                "InvoiceNumber": "",
                                "PaymentId": "",
                                "Amount": "",
                                "IPAddress": "",
                                "TrackId": "",
                                "PaymentGateway": "",
                                "PaymentModeType": ""
                            },
                            "SessionId": $scope.sessionId,
                            "PromotionalPlanType": flight.PromotionalPlanType,
                            "SegmentKey": data.key,
                            "MemberMobileNo": serverConfig.memberMobileNumber,
                            "MemberMobilePin": serverConfig.memberMobilePin
                        };
                        console.log(data.key);
                        Flight.setflightBookData(bookVal);
                        Flight.setFlightData(data);
                        $location.path('/bookingDetail');
                    }
                });
            }
            else{
                angular.forEach($scope.flightData, function (flight, key) {
                    if (flight.SegmentKey == data.key) {
                   //     fResult = flight;
                        getFareQuote = {
                            "sessionId":$scope.sessionId,
                            "Result":flight,
                            "MemberMobileNo": serverConfig.memberMobileNumber,
                            "MemberMobilePin": serverConfig.memberMobilePin
                        };
                        console.log(flight.SegmentKey);
                        console.log(data.key);
                        Flight.flightGetFareQuote(getFareQuote).then(function (fareQuoteResponse) {
                            console.log('getFare Quote');
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



