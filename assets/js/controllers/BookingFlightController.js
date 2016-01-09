angular.module('Travally')
    .controller('BookingFlightController', function($http, $scope, $routeParams, $filter, $location, Flight) {
        $scope.passenger =  {
            "adult": window.localStorage['AdultCount'],
            "child":window.localStorage['ChildCount'],
            "infant":window.localStorage['InfantCount'],
            "senior":window.localStorage['SeniorCount']
        };
        $scope.flightData = Flight.getFlightData();
        $scope.bookVal = Flight.getflightBookData();
        //console.log($scope.flightData);

        angular.forEach($scope.flightData.FareBreakdown, function (f, key) {
            p = {
                "Title": "",
                "FirstName": "",
                "LastName": "",
                "Type": 0,
                "DateOfBirth":"",
                "Fare": f,
                "Ssr": null,
                "Gender": 1,
                "PassportNumber": "",
                "PassportExpiry": "",
                "PinCode": "",
                "Country": "IN",
                "Phone": "",
                "AddressLine1": "",
                "AddressLine2": "",
                "Email": "javedahamad4@gmail.com",
                "Meal": {
                    "Code": "FPML",
                    "Description": "Fruit Meal"
                },
                "Seat": {
                    "Code": "A",
                    "Description": "Aisle"
                },
                "FFAirline": "", "FFNumber": ""
            };
            $scope.bookVal.Passenger.push(p);
        });


        $scope.BookFlight = function(){
            console.log($scope.bookVal);
            Flight.flightBooking($scope.bookVal).then(function (bookingResponse) {
                console.log('booking Details');
                $scope.bookingResponse = bookingResponse.data;
                console.log(bookingResponse.data);
            }).catch(function (response) {
                console.log(response);
            });
        };
    });
