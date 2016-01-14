angular.module('Travally')
    .controller('HotelDetailsController', function($http, $scope, Hotel,$routeParams,$filter, $location) {
        $scope.hotel = Hotel.getSelectedHotel();

        var index = $routeParams.index;
         $scope.sessionId = $routeParams.sessionId;
        console.log($scope.hotel);
        $scope.selected = $scope.hotel.RoomDetails[0];
        $scope.selectedRoomIndex = $scope.selected.Index;
        var h = {
            "SessionId": $scope.sessionId,
            "Index": index,
            "MemberMobileNo":"9983772777",
            "MemberMobilePin":"6366"
    };
        Hotel.getHotelDetails(h).then(function (data) {
            $scope.hotelDetail = data.data.HotelDetail
        }).catch(function (data) {
            console.log(data);
        });

/*var rc = $scope.selected.RoomTypeCode+"###"+$scope.selected.RatePlanCode;*/

        console.log($scope.hotel);


        $scope.bookHotel = function(){
            $scope.$emit('LOAD')

            var hb ={
                "RoomCodes":[
                    $scope.selected.RoomTypeCode
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
                        "RoomIndex": $scope.selected.Index
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
                    "PaymentModeType": 2
                },
                "NoOfRooms": $scope.hotel.NoOfRooms,
                "Index": $scope.hotel.Index,
                "HotelCode": $scope.hotel.HotelInfo.HotelCode,
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

            Hotel.hotelBook(hb).then(function (data) {
                $scope.bookResponse = data.data;
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

