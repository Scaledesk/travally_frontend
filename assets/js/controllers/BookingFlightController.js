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
        console.log($scope.passenger);
        console.log($scope.bookVal);
        $scope.BookFlight = function(){
            Flight.flightBooking($scope.bookVal).then(function (bookingResponse) {
                console.log('booking Details');
                console.log(bookingResponse);
            }).catch(function (response) {
                console.log(response);
            });
        };
        for (var i=1; i<$scope.passenger.adult; i++) {
            $scope.pp = {
                "Title": "",
                "FirstName": "",
                "LastName": "",
                "Type": 0,
                "DateOfBirth": "",
                "Fare": {
                    "BaseFare": 0.0,
                    "Tax": 0.0,
                    "ServiceTax": 0.0,
                    "AdditionalTxnFee": 0.0,
                    "AgentCommission": 0.0,
                    "TdsOnCommission": 0.0,
                    "IncentiveEarned": 0.0,
                    "TdsOnIncentive": 0.0,
                    "PLBEarned": 0.0,
                    "TdsOnPLB": 0.0,
                    "PublishedPrice": 0.0,
                    "AirTransFee": 0.0,
                    "Currency": null,
                    "Discount": 0.0,
                    "ChargeBU": null,
                    "OtherCharges": 0.0,
                    "FuelSurcharge": 0.0,
                    "TransactionFee": 0.0,
                    "ReverseHandlingCharge": 0.0,
                    "OfferedFare": 0.0,
                    "AgentServiceCharge": 0.0,
                    "AgentConvienceCharges": 0.0,
                    "Markup": null
                },
                "Ssr": null,
                "Gender": 1,
                "PassportNumber": "",
                "PassportExpiry": "",
                "PinCode": "",
                "Country": "IN",
                "Phone": "",
                "AddressLine1": "",
                "AddressLine2": "",
                "Email": "",
                "Meal": {
                    "Code": "",
                    "Description": ""
                },
                "Seat": {
                    "Code": "",
                    "Description": ""
                },
                "FFAirline": "", "FFNumber": ""
            };
            $scope.bookVal.Passenger.push($scope.pp);
        }

    });
