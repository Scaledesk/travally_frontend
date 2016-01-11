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

            p =  {
                "Title":"Mr",
                "FirstName":"Trivedi",
                "LastName":"Nupoora",
                "Type":0,
                "DateOfBirth":"2003-06-19T00:00:00",
                "Fare":{
                    "BaseFare": f.BaseFare,
                    "Tax": f.Tax,
                    "ServiceTax":0.0,
                    "AdditionalTxnFee": f.AdditionalTxnFee,
                    "AgentCommission":0.0,
                    "TdsOnCommission":0.0,
                    "IncentiveEarned":0.0,
                    "TdsOnIncentive":0.0,
                    "PLBEarned":0.0,
                    "TdsOnPLB":0.0,
                    "PublishedPrice":0.0,
                    "AirTransFee": f.AirlineTransFee,
                    "Currency":null,
                    "Discount":0.0,
                    "ChargeBU":null,
                    "OtherCharges":0.0,
                    "FuelSurcharge": f.FuelSurcharge,
                    "TransactionFee":0.0,
                    "ReverseHandlingCharge":0.0,
                    "OfferedFare":0.0,
                    "AgentServiceCharge": f.AgentServiceCharge,
                    "AgentConvienceCharges": f.AgentConvienceCharges,
                    "Markup":null
                },
                "Ssr":null,
                "Gender":1,
                "PassportNumber":"",
                "PassportExpiry":"0001-01-01T00:00:00",
                "PinCode":"364270",
                "Country":"IN",
                "Phone":"7878127048",
                "AddressLine1":"demo",
                "AddressLine2":"demo",
                "Email":"abc@jbspl.com",
                "Meal":{
                    "Code":"AVML",
                    "Description":"Asian - Vegetarian"
                },
                "Seat":{
                    "Code":"A",
                    "Description":"Aisle"
                },
                "FFAirline":"",
                "FFNumber":""
            };
            $scope.bookVal.Passenger.push(p);
        });

        $scope.BookFlight = function(){
            $scope.$emit('LOAD')
            console.log($scope.bookVal);
            Flight.flightBooking($scope.bookVal).then(function (bookingResponse) {
                $scope.$emit('UNLOAD')
                console.log('booking Details');
                $scope.bookingResponse = bookingResponse.data;
                console.log(bookingResponse.data);
            }).catch(function (response) {
                $scope.$emit('UNLOAD')
                console.log(response);
            });
        };
    });






var ticket = {
    "BookingID": "sample string 1",
    "Origin": "sample string 2",
    "Destination": "sample string 3",
    "Segment": [
    {
        "SegmentIndicator": 1,
        "Airline": {
            "AirlineCode": "sample string 1",
            "AirlineName": "sample string 2",
            "AirLineRemarks": "sample string 3"
        },
        "FlightNumber": "sample string 2",
        "FareClass": "sample string 3",
        "AirlinePNR": "sample string 4",
        "Origin": {
            "AirportCode": "sample string 1",
            "AirportName": "sample string 2",
            "Terminal": "sample string 3",
            "CityCode": "sample string 4",
            "CityName": "sample string 5",
            "CountryCode": "sample string 6",
            "CountryName": "sample string 7"
        },
        "Destination": {
            "AirportCode": "sample string 1",
            "AirportName": "sample string 2",
            "Terminal": "sample string 3",
            "CityCode": "sample string 4",
            "CityName": "sample string 5",
            "CountryCode": "sample string 6",
            "CountryName": "sample string 7"
        },
        "DepTIme": "2016-01-11T19:43:37.1161897+05:30",
        "ArrTime": "2016-01-11T19:43:37.1161897+05:30",
        "ETicketEligible": true,
        "Duration": "sample string 8",
        "Stop": 9,
        "Craft": "sample string 10",
        "Status": "sample string 11",
        "OperatingCarrier": "sample string 12"
    },
    {
        "SegmentIndicator": 1,
        "Airline": {
            "AirlineCode": "sample string 1",
            "AirlineName": "sample string 2",
            "AirLineRemarks": "sample string 3"
        },
        "FlightNumber": "sample string 2",
        "FareClass": "sample string 3",
        "AirlinePNR": "sample string 4",
        "Origin": {
            "AirportCode": "sample string 1",
            "AirportName": "sample string 2",
            "Terminal": "sample string 3",
            "CityCode": "sample string 4",
            "CityName": "sample string 5",
            "CountryCode": "sample string 6",
            "CountryName": "sample string 7"
        },
        "Destination": {
            "AirportCode": "sample string 1",
            "AirportName": "sample string 2",
            "Terminal": "sample string 3",
            "CityCode": "sample string 4",
            "CityName": "sample string 5",
            "CountryCode": "sample string 6",
            "CountryName": "sample string 7"
        },
        "DepTIme": "2016-01-11T19:43:37.1161897+05:30",
        "ArrTime": "2016-01-11T19:43:37.1161897+05:30",
        "ETicketEligible": true,
        "Duration": "sample string 8",
        "Stop": 9,
        "Craft": "sample string 10",
        "Status": "sample string 11",
        "OperatingCarrier": "sample string 12"
    },
    {
        "SegmentIndicator": 1,
        "Airline": {
            "AirlineCode": "sample string 1",
            "AirlineName": "sample string 2",
            "AirLineRemarks": "sample string 3"
        },
        "FlightNumber": "sample string 2",
        "FareClass": "sample string 3",
        "AirlinePNR": "sample string 4",
        "Origin": {
            "AirportCode": "sample string 1",
            "AirportName": "sample string 2",
            "Terminal": "sample string 3",
            "CityCode": "sample string 4",
            "CityName": "sample string 5",
            "CountryCode": "sample string 6",
            "CountryName": "sample string 7"
        },
        "Destination": {
            "AirportCode": "sample string 1",
            "AirportName": "sample string 2",
            "Terminal": "sample string 3",
            "CityCode": "sample string 4",
            "CityName": "sample string 5",
            "CountryCode": "sample string 6",
            "CountryName": "sample string 7"
        },
        "DepTIme": "2016-01-11T19:43:37.1161897+05:30",
        "ArrTime": "2016-01-11T19:43:37.1161897+05:30",
        "ETicketEligible": true,
        "Duration": "sample string 8",
        "Stop": 9,
        "Craft": "sample string 10",
        "Status": "sample string 11",
        "OperatingCarrier": "sample string 12"
    }
],
    "FareType": "sample string 4",
    "FareRule": [
    {
        "Origin": "sample string 1",
        "Destination": "sample string 2",
        "Airline": "sample string 3",
        "FareRestriction": "sample string 4",
        "FareBasisCode": "sample string 5",
        "FareRuleDetail": "sample string 6",
        "DepartureDate": "2016-01-11T19:43:37.1161897+05:30",
        "ReturnDate": "2016-01-11T19:43:37.1161897+05:30",
        "Source": 0
    },
    {
        "Origin": "sample string 1",
        "Destination": "sample string 2",
        "Airline": "sample string 3",
        "FareRestriction": "sample string 4",
        "FareBasisCode": "sample string 5",
        "FareRuleDetail": "sample string 6",
        "DepartureDate": "2016-01-11T19:43:37.1161897+05:30",
        "ReturnDate": "2016-01-11T19:43:37.1161897+05:30",
        "Source": 0
    },
    {
        "Origin": "sample string 1",
        "Destination": "sample string 2",
        "Airline": "sample string 3",
        "FareRestriction": "sample string 4",
        "FareBasisCode": "sample string 5",
        "FareRuleDetail": "sample string 6",
        "DepartureDate": "2016-01-11T19:43:37.1161897+05:30",
        "ReturnDate": "2016-01-11T19:43:37.1161897+05:30",
        "Source": 0
    }
],
    "Fare": {
    "BaseFare": 1.0,
        "Tax": 2.0,
        "ServiceTax": 3.0,
        "AdditionalTxnFee": 4.0,
        "AgentCommission": 5.0,
        "TdsOnCommission": 6.0,
        "IncentiveEarned": 7.0,
        "TdsOnIncentive": 8.0,
        "PLBEarned": 9.0,
        "TdsOnPLB": 10.0,
        "PublishedPrice": 11.0,
        "AirTransFee": 12.0,
        "Currency": "sample string 13",
        "Discount": 14.0,
        "ChargeBU": [
        {
            "PriceId": 1,
            "ChargeType": 0,
            "Amount": 2.0
        },
        {
            "PriceId": 1,
            "ChargeType": 0,
            "Amount": 2.0
        },
        {
            "PriceId": 1,
            "ChargeType": 0,
            "Amount": 2.0
        }
    ],
        "OtherCharges": 15.0,
        "FuelSurcharge": 16.0,
        "TransactionFee": 17.0,
        "ReverseHandlingCharge": 18.0,
        "OfferedFare": 19.0,
        "AgentServiceCharge": 20.0,
        "AgentConvienceCharges": 21.0,
        "Markup": {
        "MarkupType": 1,
            "value": 1.0,
            "IsNegative": true,
            "CancelMarkUp": 1.0,
            "ItemID": 1,
            "ServiceID": 1,
            "ServiceProviderID": 1
    }
},
    "Passenger": [
    {
        "Title": "sample string 1",
        "FirstName": "sample string 2",
        "LastName": "sample string 3",
        "Type": 0,
        "DateOfBirth": "2016-01-11T19:43:37.1317897+05:30",
        "Fare": {
            "BaseFare": 1.0,
            "Tax": 2.0,
            "ServiceTax": 3.0,
            "AdditionalTxnFee": 4.0,
            "AgentCommission": 5.0,
            "TdsOnCommission": 6.0,
            "IncentiveEarned": 7.0,
            "TdsOnIncentive": 8.0,
            "PLBEarned": 9.0,
            "TdsOnPLB": 10.0,
            "PublishedPrice": 11.0,
            "AirTransFee": 12.0,
            "Currency": "sample string 13",
            "Discount": 14.0,
            "ChargeBU": null,
            "OtherCharges": 15.0,
            "FuelSurcharge": 16.0,
            "TransactionFee": 17.0,
            "ReverseHandlingCharge": 18.0,
            "OfferedFare": 19.0,
            "AgentServiceCharge": 20.0,
            "AgentConvienceCharges": 21.0,
            "Markup": null
        },
        "Ssr": null,
        "Meal":{
            "Code":"AVML",
            "Description":"Asian - Vegetarian"
        },
        "Seat":{
            "Code":"A",
            "Description":"Aisle"
        },
        "Gender": 1,
        "PassportNumber": "sample string 5",
        "PassportExpiry": "2016-01-11T19:43:37.1473897+05:30",
        "PinCode": "sample string 7",
        "Country": "sample string 8",
        "Phone": "sample string 9",
        "AddressLine1": "sample string 10",
        "AddressLine2": "sample string 11",
        "Email": "sample string 12",
        "Meal": {
            "Code": "sample string 1",
            "Description": "sample string 2"
        },
        "Seat": {
            "Code": "sample string 1",
            "Description": "sample string 2"
        },
        "FFAirline": "sample string 13",
        "FFNumber": "sample string 14"
    }
],

    "Remarks": "sample string 5",
    "InstantTicket": true,
    "PaymentInformation": {
    "PaymentInformationId": 1,
        "InvoiceNumber": 2,
        "PaymentId": "sample string 3",
        "Amount": 4.0,
        "IPAddress": "sample string 5",
        "TrackId": 6,
        "PaymentGateway": 0,
        "PaymentModeType": 0
},
    "Source": 0,
    "SessionId": "sample string 7",
    "IsOneWayBooking": true,
    "CorporateCode": "sample string 9",
    "TourCode": "sample string 10",
    "Endorsement": "sample string 11",
    "PromotionalPlanType": 0,
    "MemberMobileNo": "sample string 12",
    "MemberMobilePin": "sample string 13"
};


/*
bookVal = {
    "Remarks":"test",
    "InstantTicket":true,
    "Fare":flight.Fare,
    "Passenger":[],
    "Origin": data.origin,
    "Destination": data.destination,
    "Segment": flight.Segment,
    "FareType":"PUB",
    "FareRule": flight.FareRule,
    "Source":3,
    "PaymentInformation":{
        "PaymentInformationId":0,
        "InvoiceNumber":0,
        "PaymentId":"0",
        "Amount":0.0,
        "IPAddress":"127.0.0.1",
        "TrackId":0,
        "PaymentGateway":4,
        "PaymentModeType":2
    },
    "SessionId": $scope.sessionId,
    "PromotionalPlanType": flight.PromotionalPlanType,
    "SegmentKey": data.key,
    "MemberMobileNo": serverConfig.memberMobileNumber,
    "MemberMobilePin": serverConfig.memberMobilePin
};*/




