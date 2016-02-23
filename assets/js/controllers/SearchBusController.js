angular.module('Travally')
    .controller('SearchBusController', function($http, $scope,Flight,$auth, $routeParams, $filter, $location, serverConfig, BusServices, $sce) {
        $scope.SourceId = $routeParams.SourceId;
        $scope.DestinationId = $routeParams.DestinationId;
        $scope.SourceName = $routeParams.SourceName;
        $scope.DestinationName = $routeParams.DestinationName;
        $scope.DateOfJourney = $routeParams.DateOfJourney;
        $scope.page_type = "list";
        $scope.details = false;
        $scope.route_id = "asas";

        $scope.TBSelectedSeatsPrice= 0;
        $scope.TBSelectedSeats= "";


        $scope.sortType     = "duration";
        $scope.sortReverse  = false;

         $scope.searchBusesDetails = {
            "SourceId": $scope.SourceId,
            "DestinationId": $scope.DestinationId,
            "SourceName": $scope.SourceName,
            "DestinationName": $scope.DestinationName,
            "DateOfJourney": $scope.DateOfJourney,
            "IsDomestic": true,
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };
        $scope.Bus_Result = [];
        $scope.$emit('LOAD')
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
            });

            $scope.$emit('UNLOAD')
        }).catch(function (response) {
            $scope.$emit('UNLOAD')
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
        $scope.bookingDetails = function(data,TBSelectedSeatsPrice,TBSelectedSeats) {
            console.log(TBSelectedSeatsPrice);
            console.log(TBSelectedSeats);
            var str = TBSelectedSeats;
            var res = str.split(",");

             $scope.book = {
                "BusId":data.bus_id,
                "SourceId":$scope.SourceId,
                "DestinationId":$scope.DestinationId,
                "SourceName":$scope.SourceName,
                "DestinationName":$scope.DestinationName,
                "DateOfJourney":$scope.DateOfJourney,
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

            $scope.book_button_text = 'Booking.....';
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


            var t ={
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
            }).catch(function (response) {
                $scope.$emit('UNLOAD')
                console.log(response);
            });



            /*BusServices.BookBus($scope.book).then(function (BookResponse) {
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

        /*$scope.filterFlightDetail=function(){
            $scope.flightResult = $filter('filter')($scope.flightResultData,{fareClass:$scope.checkboxModel.fareClass,stop:$scope.fareStop.stop})
        }*/
    });


