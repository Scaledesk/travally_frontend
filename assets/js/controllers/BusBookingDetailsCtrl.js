angular.module('Travally')
    .controller('BusBookingDetailsCtrl', function($http, $scope,$document,$cookies, $auth, $rootScope,serverConfig, $filter, $location, Flight) {
        $document.scrollTop(0);
        $scope.book = $cookies.getObject('bookBus');
        $scope.selected_bus = $cookies.getObject('selected_bus');
        $scope.TBSelectedSeatsPrice=window.localStorage['totalBusFare'];
        $scope.TBSelectedSeats=window.localStorage['selectedSeat'];
        console.log('hfhdbvfdbgvfdgvdgvfchdvcghdgvchgdvcgdvghcd');

        console.log($scope.TBSelectedSeatsPrice);
        console.log($scope.TBSelectedSeats);
        console.log($scope.book);
        console.log($scope.selected_bus);

        $scope.busBook = function(){

            $scope.submitted = true;
            if($scope.pax.$invalid){
                return false;
            }
            if(!$auth.isAuthenticated()){
                window.localStorage['url'] =$location.url();
                $location.path('/login');
                return;
            }
            var t ={
                "type":"Bus Booking",
                "amount":$scope.TBSelectedSeatsPrice,
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
        }

    });