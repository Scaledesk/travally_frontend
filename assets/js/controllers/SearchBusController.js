angular.module('Travally')
    .controller('SearchBusController', function($http, $scope, $routeParams, $filter, $location, serverConfig, BusServices) {
        $scope.SourceId = $routeParams.SourceId;
        $scope.DestinationId = $routeParams.DestinationId;
        $scope.SourceName = $routeParams.SourceName;
        $scope.DestinationName = $routeParams.DestinationName;
        $scope.DateOfJourney = $routeParams.DateOfJourney;


        $scope.sortType     = "duration";
        $scope.sortReverse  = false;



        var searchBusesDetails = {
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
        BusServices.searchBuses(searchBusesDetails).then(function (responseBuses) {
            console.log(responseBuses);
            $scope.Bus_Results = responseBuses.data.BusSearchResult;
            $scope.SessionId = responseBuses.data.sessionId;
            angular.forEach($scope.Bus_Results, function (Buses, key) {
                angular.forEach(Buses.BoardingPointsDetails, function (Boarding, key) {
                    boarding_point_name = Boarding.CityPointName;
                    boarding_point_location = Boarding.CityPointLocation;
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
                "boarding_point_name" : boarding_point_name,
                "boarding_point_location" : boarding_point_location,
                "duration":diff(Buses.DepartureTime,Buses.ArrivalTime),
                "dropping_point_name" : dropping_point_name,
                "dropping_point_location" : dropping_point_location,
                "boarding_point_details" : Buses.BoardingPointsDetails,
                "cancel_policy" : Buses.CancelPolicy,
                "price" : Buses.Price
            };
                $scope.Bus_Result.push(busDetails);
            });

            $scope.$emit('UNLOAD')
        }).catch(function (response) {
            $scope.$emit('UNLOAD')
            console.log(response);
        });

        $scope.bookingDetails = function(data) {

            var book = {
                "BusId":0,
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
                "NoOfSeats":1,
                "DepartureTime":data.departure_time,
                "ArrivalTime":data.arrival_time,
                "TotalFare":data.available_fares,
                "BoardingPointdetails":data.boarding_point_details,
                "CancelPolicy":data.cancel_policy,
                "PaxDetail":{
                    "BusId":0,
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
                "SeatsDetail":""/*[
                    {
                        "SeatId":0,
                        "BusId":0,
                        "SeatName":"A2",
                        "SeatType":1,
                        "RowNo":"000",
                        "ColumnNo":"000",
                        "SeatStatus":1,
                        "SeatFare":100.0,
                        "priceId":0,
                        "Width":1,
                        "Height":2,
                        "IsLadies":false,
                        "IsUpper":false,
                        "Price": {
                            "TdsCommission":0.6,
                            "PriceId":0,
                            "PublishedFare":100.0,
                            "AgentCommission":6.0,
                            "SeviceTax":0.0,
                            "Tax":0.0,
                            "Currency":"",
                            "RateOfExchange":1.0,
                            "CurrencyCode":"INR",
                            "Discount":0.0,
                            "TdsRate":0.0
                        }}
                ]*/,
                "Currency":"INR",
                "sessionId":$scope.SessionId,
                "ProductTypeId":0,
                "ProductId":0,
                "BookingMode":0,
                "ProductType":0,
                "MemberMobileNo":serverConfig.memberMobileNumber,
                "MemberMobilePin":serverConfig.memberMobilePin
            };


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



