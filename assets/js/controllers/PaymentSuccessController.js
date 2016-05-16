angular.module('Travally')
    .controller('PaymentSuccessController', function($http, $scope,Flight,$auth, $routeParams, serverConfig, BusServices, $sce) {
        $scope.$emit('LOAD')
        $scope.s = false;
        id = $routeParams.id;
        Flight.getTransaction(id).then(function (Res) {
            console.log("booking response");
            $scope.result =  Res.data.data;
            /*BusServices.BookBus($scope.result.booking_request).then(function (BookResponse) {
             $scope.book_response = BookResponse.data;
             console.log(BookResponse);
                $scope.$emit('UNLOAD')
             }).catch(function (response) {
             $scope.book_response = response.data;
             console.log(response);
                $scope.$emit('UNLOAD')
             });*/
            $scope.book();
            console.log($scope.result);
            $scope.$emit('UNLOAD')
        }).catch(function (response) {
            $scope.$emit('UNLOAD')
            console.log(response);
        });
        $scope.book = function(){
            $scope.$emit('LOAD')
            BusServices.BookBus($scope.result.booking_request).then(function (BookResponse) {
                $scope.book_response = BookResponse.data;
                console.log(BookResponse);
                $scope.storeTicketDetails();
                $scope.$emit('UNLOAD')
            }).catch(function (response) {
                $scope.book_response = response.data;
                console.log(response);
                $scope.$emit('UNLOAD')
            });
        };

        $scope.storeTicketDetails = function(){
            $scope.$emit('LOAD')
            var ticketDetails = {
              "ticket_no":$scope.book_response.ticketNo,
              "status":$scope.book_response.status,
              "travel_operator":$scope.result.booking_request.TravelName,
              "travel_operator_pnr":$scope.book_response.travelOperatorPNR,
              "description":$scope.book_response.Message.Description,
              "source":$scope.result.booking_request.SourceName,
              "destination":$scope.result.booking_request.DestinationName,
              "departure_date":$scope.result.booking_request.DepartureTime
            };
            BusServices.saveBusBookingDetails(ticketDetails).then(function (res) {
                console.log("sav details");
                console.log(res);
                $scope.mm = res.data.data.message;
                $scope.s = true;
                $scope.$emit('UNLOAD')
            }).catch(function (response) {
                $scope.$emit('UNLOAD')
                console.log(response);
            });
        }
    });