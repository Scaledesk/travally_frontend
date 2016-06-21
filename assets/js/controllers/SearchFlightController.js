angular.module('Travally')
    .controller('SearchFlightController', function($http, $scope,$document,$cookies,$sce,TrainBetweenStation, $routeParams,BusServices, $filter, $location, Flight, $rootScope, serverConfig) {
        $scope.Math=Math;
        $document.scrollTop(0);
        $scope.checkboxModel = {
            "fareClass":""
        };
        $scope.fareStop = {
            "stop":""
        };
        $scope.selectedSource = $cookies.getObject('source');
        $scope.selectedDestination = $cookies.getObject('destination');
        $scope.formData = $cookies.getObject('formData');
        $scope.source = $routeParams.source;
        $scope.destination = $routeParams.destination;
        $scope.departureDate = $routeParams.departureDate;
        $scope.passenger = $routeParams.passenger;
        $scope.sortTypeBus     = "duration";
        $scope.sortTypeTrain     = "duration";
        $scope.sortTypeFlight     = "Duration";
        $scope.sortReverse  = false;
        $scope.master_stations = [
            {
                "CityId":"2542",
                "name":"Allahabad",
                "SCode":"ALD",
                "FCode":"IXD"
            },
            {
                "CityId":"1337",
                "name":"Lucknow",
                "SCode":"LKO",
                "FCode":"LKO"
            },
            {
                "CityId":"1327",
                "name":"Kanpur",
                "SCode":"CNB",
                "FCode":"KNU"
            },
            {
                "CityId":"1492",
                "name":"Delhi",
                "SCode":"NDLS",
                "FCode":"DEL"
            },
            {
                "CityId":"1322",
                "name":"Agra",
                "SCode":"AGA",
                "FCode":"AGR"
            },
            {
                "CityId":"3",
                "name":"Bangalore",
                "SCode":"BNC",
                "FCode":"BLR"
            },
            {
                "CityId":"1333",
                "name":"Bareilly",
                "SCode":"BRY",
                "FCode":"LKO"
            }
        ];
        $scope.refreshSources = function(query){
            console.log(query);
            $scope.sources = $filter('filter')($scope.master_stations,{name:query})
        };
        $scope.refreshDestinations = function(query){
            $scope.destinations = $filter('filter')($scope.master_stations,{name:query})
        };

        $scope.ss='flight';
        var dddd = {
            "JourneyType": 1,
            "AdultCount": $scope.formData.adult,
            "ChildCount": $scope.formData.children,
            "InfantCount": $scope.formData.infant,
            "DirectFlight": false,
            "OneStopFlight": false,
            "Segments": [
                {
                    "Origin": $scope.source,
                    "Destination": $scope.destination,
                    "PreferredDepartureTime": $scope.departureDate,
                    "PreferredArrivalTime": "",
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
            $scope.final_flight_result = $scope.flightData;
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



        $scope.bookingDetailsFlight = function(data) {
            $cookies.putObject('selectedFlight',data);
            window.localStorage['ResultIndex'] = data.ResultIndex;
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
        };


        /**
         * Bus search result
         */


        $scope.page_type = "list";
        $scope.details = false;
        $scope.route_id = "asas";
        $scope.TBSelectedSeatsPrice= 0;
        $scope.TBSelectedSeats= "";

        $scope.searchBusesDetails = {
            "SourceId": $scope.selectedSource.selected.CityId,
            "DestinationId": $scope.selectedDestination.selected.CityId,
            "SourceName": $scope.selectedSource.selected.name,
            "DestinationName": $scope.selectedDestination.selected.name,
            "DateOfJourney": $scope.formData.date,
            "IsDomestic": true,
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };
        $scope.Bus_Result = [];
        //$scope.$emit('LOAD')
        BusServices.searchBuses($scope.searchBusesDetails).then(function (responseBuses) {
            console.log(responseBuses);
            $scope.Bus_Results = responseBuses.data.BusSearchResult;
            $scope.SessionId = responseBuses.data.sessionId;
            angular.forEach($scope.Bus_Results, function (Buses, key) {
                angular.forEach(Buses.BoardingPointsDetails, function (Boarding, key) {
                    bus_id = Boarding.BusId;
                    city_point_id = Boarding.CityPointId;
                    boarding_point_landmark = Boarding.CityPointLandmark;
                    boarding_point_name = Boarding.CityPointName;
                    boarding_point_location = Boarding.CityPointLocation;
                    boarding_point_address = Boarding.CityPointAddress;
                    boarding_point_contact_number = Boarding.CityPointContactNumber;
                    boarding_point_time = Boarding.CityPointTime;

                });
                angular.forEach(Buses.DroppingPointsDetails, function (Dropping, key) {
                    dropping_point_name = Dropping.CityPointName;
                    dropping_point_location = Dropping.CityPointLocation;
                });
                var busDetails = {
                    "route_id" : Buses.RouteId,
                    "bus_type" : Buses.BusType,
                    "service_name" : Buses.ServiceName,
                    "travel_name" : Buses.TravelName,
                    "departure_time" : Buses.DepartureTime,
                    "arrival_time" : Buses.ArrivalTime,
                    "bus_source" : Buses.BusSource,
                    "available_seats" : Buses.AvailableSeats,
                    "available_fares" : Buses.AvailableFares,
                    "source_name": responseBuses.data.SourceName,
                    "destination_name": responseBuses.data.DestinationName,
                    "date_of_journey" : responseBuses.data.DateOfJourney,
                    "boarding_point_id" : city_point_id,
                    "bus_id" : bus_id,
                    "boarding_point_name" : boarding_point_name,
                    "boarding_point_location" : boarding_point_location,
                    "boarding_point_landmark" : boarding_point_landmark,
                    "boarding_point_address" : boarding_point_address,
                    "boarding_point_contact_number" : boarding_point_contact_number,
                    "boarding_point_time" : boarding_point_time,
                    "duration":diff(Buses.DepartureTime,Buses.ArrivalTime),
                    "dropping_point_name" : dropping_point_name,
                    "dropping_point_location" : dropping_point_location,
                    "cancel_policy" : Buses.CancelPolicy,
                    "dropping_point_details" : Buses.DroppingPointsDetails,
                    "price" : Buses.Price,
                    "busDetailsView":false,
                    "detailsLoading":false,
                    "seat_layout": {}
                };
                $scope.Bus_Result.push(busDetails);
                $scope.final_bus_result = $scope.Bus_Result;
            });

            //$scope.$emit('UNLOAD')
        }).catch(function (response) {
            //$scope.$emit('UNLOAD')
            console.log(response);
        });
        $scope.showDetails =function(busses){
            $scope.book_response = "";
            if($scope.route_id == busses.route_id){
                $scope.route_id = "";
            }
            else{
                $scope.route_id = busses.route_id;
            }
            if(busses.busDetailsView == true){
                busses.busDetailsView = false;
            }
            else{
                busses.busDetailsView = true;
            }
            busses.detailsLoading = "true";
            if(busses.busDetailsView == true) {
                var bb = {
                    "BTBusSearchResult": {
                        "RouteId": busses.route_id,
                        "BusType": busses.bus_type,
                        "ServiceName": busses.service_name,
                        "TravelName": busses.travel_name,
                        "Currency": "INR",
                        "DepartureTime": busses.departure_time,
                        "ArrivalTime": busses.arrival_time,
                        "BusSource": busses.bus_source,
                        "AvailableSeats": busses.available_seats,
                        "AvailableFares": busses.available_fares,
                        "CancelPolicy": busses.cancel_policy,
                        "DroppingPointsDetails": busses.dropping_point_details,
                        "Price": busses.price
                    },
                    "DateOfJourney": $scope.DateOfJourney,
                    "sessionId": $scope.SessionId,
                    "MemberMobileNo": serverConfig.memberMobileNumber,
                    "MemberMobilePin": serverConfig.memberMobilePin
                };
                BusServices.getSeatLayout(bb).then(function (seatLayout) {
                    busses.detailsLoading = false;
                    busses.seat_layout = seatLayout;
                    console.log(seatLayout);
                }).catch(function (response) {
                    $scope.detailsLoading = false;
                    console.log(response);
                });
            }
        };
        $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
        $scope.book_button_text = 'Book Seat';
        $scope.book_button_disabled = false;
        $scope.bookingDetailsBus = function(data,TBSelectedSeatsPrice,TBSelectedSeats) {
            console.log(TBSelectedSeatsPrice);
            console.log(TBSelectedSeats);
            var str = TBSelectedSeats;
            var res = str.split(",");
            $scope.book = {
                "BusId":data.bus_id,
                "SourceId":$scope.selectedSource.selected.CityId,
                "DestinationId": $scope.selectedDestination.selected.CityId,
                "SourceName":data.source_name,
                "DestinationName":data.destination_name,
                "DateOfJourney":data.date_of_journey,
                "BusSource":data.bus_source,
                "IsDomestic":true,
                "RouteId":data.route_id,
                "BusType":data.bus_type,
                "Travel Name": data.travel_name,
                "NoOfSeats":res.length,
                "DepartureTime":data.departure_time,
                "ArrivalTime":data.arrival_time,
                "TotalFare":TBSelectedSeatsPrice,
                "BoardingPointdetails":{
                    "CityPointId": data.boarding_point_id,
                    "BusId": data.bus_id,
                    "CityPointName": data.boarding_point_name,
                    "CityPointLocation": data.boarding_point_location,
                    "CityPointLandmark": data.boarding_point_landmark,
                    "CityPointAddress": data.boarding_point_address,
                    "CityPointContactNumber": data.boarding_point_contact_number ,
                    "CityPointTime": data.boarding_point_time
                },
                "CancelPolicy":data.cancel_policy,
                "PaxDetail":{
                    "BusId":data.bus_id,
                    "PaxId":1,
                    "Title":"Mr.",
                    "LastName":"Ahamad",
                    "FirstName":"javed",
                    "Age":24,
                    "PhoneNo":"8285846853",
                    "EMail":"javedahamad4@gmail.com",
                    "Address":"Delhi",
                    "Gender":"Male"
                },
                "SeatsDetail":[
                ],
                "Currency":"INR",
                "sessionId":$scope.SessionId,
                "ProductTypeId":0,
                "ProductId":0,
                "BookingMode":0,
                "ProductType":0,
                "MemberMobileNo":serverConfig.memberMobileNumber,
                "MemberMobilePin":serverConfig.memberMobilePin
            };
            $scope.book_button_text = 'Booking....';
            $scope.book_button_disabled = true;
            angular.forEach(res, function (seat, key) {
                console.log(seat);
                angular.forEach(data.seat_layout.data.BTNewSeatLayoutDetails.BTSeatLayoutStructure.objStructSeatDetails, function (seatDetails, key) {
                    angular.forEach(seatDetails, function (s, key) {
                        if(seat== s.SeatName){
                            $scope.book.SeatsDetail.push(s);
                        }
                    });
                });
            });
            console.log($scope.book);
            console.log(data);
            $scope.selected_bus = data;
            $cookies.putObject('bookBus',$scope.book);
            $cookies.putObject('selected_bus',$scope.selected_bus);
            window.localStorage['totalBusFare']=TBSelectedSeatsPrice;
            window.localStorage['selectedSeat']=TBSelectedSeats;
            $location.path('/bus_booking_details');
         /*   var t ={
                "type":"Bus Booking",
                "amount":TBSelectedSeatsPrice,
                "status":"pending",
                "booking_request":$scope.book
            };

            Flight.AddTransaction(t).then(function (PaymentResponse) {
                console.log("transaction response");
                console.log(PaymentResponse);
                window.location.assign("http://localhost:8000/bookingPayment/"+PaymentResponse.data.data.id+"?access_token="+$auth.getToken());
                $scope.$emit('UNLOAD')
                $scope.book_button_disabled = false;
                $scope.book_button_text = 'Book Seat';
            }).catch(function (response) {
                $scope.$emit('UNLOAD')
                console.log(response);
                $scope.book_button_disabled = false;
                $scope.book_button_text = 'Book Seat';
            });



            BusServices.BookBus($scope.book).then(function (BookResponse) {
             $scope.book_response = BookResponse.data;
             $scope.book_button_text = 'Book Seat';
             $scope.book_button_disabled = false;
             console.log(BookResponse);
             }).catch(function (response) {
             $scope.book_button_text = 'Book Seat';
             $scope.book_button_disabled = false;
             $scope.book_response = response.data;
             console.log(response);
             });*/
        };


        $scope.filter_result_cheapest = function(){
            console.log('cheapest');
            $scope.sortTypeBus     = "available_fares";
            $scope.sortTypeTrain     = "farePrice";
            $scope.sortTypeFlight     = "fare.PublishedFare";
            /*$scope.train_results = $filter('orderBy')($scope.final_train_result,{'farePrice':$scope.sortReverse})
            $scope.flightData = $filter('orderBy')($scope.final_flight_result,{'PublishedFare':$scope.sortReverse})
            $scope.Bus_Result = $filter('orderBy')($scope.final_bus_result,{'available_fares':$scope.sortReverse})*/
        };

        $scope.filter_result_fastest = function(){
            console.log('fastest');
            $scope.sortTypeBus     = "duration";
            $scope.sortTypeTrain     = "duration";
            $scope.sortTypeFlight     = "Segments[0][0].Duration";
            /*$scope.train_results = $filter('orderBy')($scope.final_train_result,{'duration':$scope.sortReverse});
            $scope.flightData = $filter('orderBy')($scope.final_flight_result,{'Duration':$scope.sortReverse});
            $scope.Bus_Result = $filter('orderBy')($scope.final_bus_result,{'duration':$scope.sortReverse});*/
        };



        function diff(start, end) {
            var date1 = new Date(start);
            var date2 = new Date(end);
            var diff = Math.abs(date2.getTime() - date1.getTime());
            var hours = Math.floor(diff / 1000 / 60 / 60);
            diff -= hours * 1000 * 60 * 60;
            var minutes = Math.floor(diff / 1000 / 60);
            // If using time pickers with 24 hours format, add the below line get exact hours
            if (hours < 0)
                hours = hours + 24;
            return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
        }


        /**
         * Train search result
         */

        var source = $scope.selectedSource.selected.SCode;
        var destination = $scope.selectedDestination.selected.SCode;
        //31-05-2016
        $scope.journey_date = $scope.formData.date;
        var sdt = new Date($scope.formData.date.replace(/-/g,"/"));
        $scope.journey_date = $filter('date')(sdt, 'dd-MM-yyyy');
        //$scope.journey_date = $scope.formData.date;
        //var dd = new Date($scope.journey_date.replace(/-/g,"/"));
        var no_of_passenger = $scope.formData.passenger;
        angular.forEach($scope.master_stations, function(station, key) {
            if(station.code == source){
                $scope.source.selected = station;
            }
            if(station.code == destination){
                $scope.destination.selected = station;
            }
        });
        $scope.no_of_passenger = no_of_passenger;
        $scope.train_results = [];
       // $scope.$emit('LOAD')
        TrainBetweenStation.get(source,destination,$scope.journey_date)
            .success(function(data) {
                $scope.records = data.train;
                $scope.total_train = $scope.records.length;
                console.log('train result');
                console.log(JSON.stringify($scope.records));
                angular.forEach($scope.records, function(record){
                    console.log('total train');
                    console.log(record);
                    TrainBetweenStation.getFare(record.number,record.from.code,record.to.code,18,"GN",$scope.journey_date)
                        .success(function(data) {
                            angular.forEach(data.fare, function(fare) {
                                //var duration = parseTime(record.dest_arrival_time) - parseTime(record.src_departure_time);
                                var duration = difference(record.src_departure_time, record.dest_arrival_time);
                                var temp = {
                                    "train" : data.train,
                                    "source" : data.from,
                                    "destination" : data.to,
                                    "quota" : data.quota,
                                    "fareName" : fare.name,
                                    "farePrice": fare.fare,
                                    "arrival_time" : record.dest_arrival_time,
                                    "departure_time" :record.src_departure_time,
                                    "journey_date" : $scope.journey_date,
                                    "duration" : duration,
                                    "no_of_passenger" : no_of_passenger
                                };
                                $scope.train_results.push(temp);
                                $scope.final_train_result = $scope.train_results;
                            });
                        });
                });
                //$scope.$emit('UNLOAD')
            })
            .error(function(data) {
                console.log(data);
         //       $scope.$emit('UNLOAD')
                //$location.path("/error");
            });


        $scope.redirectToIrctc  = function(){
            window.location="https://www.irctc.co.in";
        };
        function difference(start, end) {
            start = start.split(":");
            end = end.split(":");
            var startDate = new Date(0, 0, 0, start[0], start[1], 0);
            var endDate = new Date(0, 0, 0, end[0], end[1], 0);
            var diff = endDate.getTime() - startDate.getTime();
            var hours = Math.floor(diff / 1000 / 60 / 60);
            diff -= hours * 1000 * 60 * 60;
            var minutes = Math.floor(diff / 1000 / 60);

            // If using time pickers with 24 hours format, add the below line get exact hours
            if (hours < 0)
                hours = hours + 24;

            return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
        }







    });


