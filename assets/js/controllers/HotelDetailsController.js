angular.module('Travally')
    .controller('HotelDetailsController', function($http, $scope, $rootScope, Hotel,$routeParams,$filter, $location) {
        $scope.hotel = Hotel.getSelectedHotel();
        $scope.myInterval = 4000;
        $scope.noWrapSlides = false;
        var index = $routeParams.index;
         $scope.sessionId = $routeParams.sessionId;
        //console.log($scope.hotel);
        $scope.selected = $scope.hotel.RoomDetails[0];
        $scope.selectedRoomIndex = $scope.selected.Index;
        var h = {
            "SessionId": $scope.sessionId,
            "Index": index,
            "MemberMobileNo":"9983772777",
            "MemberMobilePin":"6366"
    };
        Hotel.getHotelDetails(h).then(function (data) {
            $rootScope.hotelDetail = data.data.HotelDetail
        }).catch(function (data) {
            console.log(data);
        });

/*var rc = $scope.selected.RoomTypeCode+"###"+$scope.selected.RatePlanCode;*/

        console.log($scope.hotel);


        $scope.bookHotel = function(){
            $scope.$emit('LOAD')

            $rootScope.hb ={
                "RoomCodes":[

                    "270348:1460512|1###5:146202:1022976|si-e7da3dae-ff1d-460a-8cf8-638fcd428d78"
                    //$scope.selected.RoomTypeCode
                ],
                "Guest": [
                    {
                        "Title": "Mr",
                        "FirstName": "Nupoora",
                        "MiddleName": "",
                        "LastName": "Trivedi",
                        "LeadGuest": true,
                        "Age": 25,
                        "Addressline1": "",
                        "Addressline2": "",
                        "Countrycode": "IN",
                        "Areacode": "147852",
                        "Phoneno": "7896541230",
                        "Email": "n@n.com",
                        "City": "Delhi",
                        "State": "Delhi",
                        "Country": "India",
                        "Zipcode": "110022",
                        "GuestType": 0,
                        "RoomIndex": 0
                        //"RoomIndex": $scope.selected.Index
                    }
                ],
                "SessionId": $scope.sessionId,
                "FlightInfo": "",
                "SpecialRequest": "",
                "PaymentInfo": {
                    "PaymentId": 0,
                    "Amount": 0,
                    "IPAddress": "127.0.0.1",
                    "TrackId": 0,
                    "PaymentGateway": 4,
                    //"PaymentModeType": 2
                    "PaymentModeType": 1
                },
                "NoOfRooms": $scope.hotel.NoOfRooms,
                "Index": $scope.hotel.Index,
                "HotelCode": "|876794",
                "HotelName": $scope.hotel.HotelInfo.HotelName,
                "CheckInDate": $scope.hotel.CheckInDate,
                "CheckOutDate": $scope.hotel.CheckOutDate,
                "DestinationCity": $scope.hotel.CityId,
                "AdultCount": 1,
                "ChildCount": 0,
                "RoomDetails": [$scope.selected],
                "IsDomestice": true,
                "MemberMobileNo":"9983772777",
                "MemberMobilePin":"6366"
            };
//"HotelCode": $scope.hotel.HotelInfo.HotelCode,
            Hotel.hotelBook($rootScope.hb).then(function (data) {
                $rootScope.bookResponse = data.data;
                $scope.$emit('UNLOAD')
            }).catch(function (data) {
                console.log(data);
                $scope.$emit('UNLOAD')
            });

        };

        $scope.selectRooms = function(room){
            $scope.selected = room;
            $scope.selectedRoomIndex = room.Index;

        };
        console.log(index);
        console.log($scope.sessionId);
    });

