angular.module('Travally')
    .controller('HotelDetailsController', function($http, $scope, Hotel,$routeParams,$filter, $location) {
        $scope.hotel = Hotel.getSelectedHotel();
        var index = $routeParams.index;
        var sessionId = $routeParams.sessionId;
        console.log($scope.hotel);

        var h = {
            "SessionId": sessionId,
            "Index": index,
            "MemberMobileNo":"9983772777",
            "MemberMobilePin":"6366"
    };
        Hotel.getHotelDetails(h).then(function (data) {

            $scope.hotelDetail = data.data.HotelDetail


        }).catch(function (data) {
            console.log(data);
            $scope.$emit('UNLOAD')
        });



        console.log(index);
        console.log(sessionId);
    });