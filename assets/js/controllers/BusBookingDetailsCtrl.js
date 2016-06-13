angular.module('Travally')
    .controller('BusBookingDetailsCtrl', function($http, $scope,$document,$cookies, $auth, $rootScope,serverConfig, $filter, $location, Flight) {
        $document.scrollTop(0);
        $scope.book = $cookies.getObject('bookBus');
        $scope.TBSelectedSeatsPrice=window.localStorage['totalBusFare'];
        $scope.TBSelectedSeats=window.localStorage['selectedSeat'];
        console.log('hfhdbvfdbgvfdgvdgvfchdvcghdgvchgdvcgdvghcd');
        console.log($scope.book);
        $scope.busBook = function(){
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