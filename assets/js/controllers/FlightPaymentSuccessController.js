angular.module('Travally')
    .controller('FlightPaymentSuccessController', function($http, $scope,Flight,$auth, $routeParams, serverConfig, BusServices, $sce) {
        $scope.$emit('LOAD')
        $scope.s = false;
        var trace_id = '';
        id = $routeParams.id;
        Flight.getTransaction(id).then(function (Res) {
            console.log("booking response");
            $scope.result =  Res.data.data;
            console.log($scope.result);
        //    $scope.$emit('UNLOAD')
            $scope.book();
        }).catch(function (response) {
            $scope.$emit('UNLOAD')
            console.log(response);
        });
        $scope.book = function(){
            $scope.$emit('LOAD')
                if ($scope.result.type=="flight_booking_lcc") {
                    $scope.$emit('LOAD')
                    Flight.flightTicket($scope.result.booking_request).then(function (ticketResponse) {
                        console.log("ticket response");
                        $scope.ticketResponse = ticketResponse.data.Response;
                        console.log(ticketResponse.data);
                        trace_id = ticketResponse.data.TraceId;
                        if($scope.ticketResponse!=null){
                            $scope.storeFlightBookingDetails();
                        }
                        else {
                            $scope.$emit('UNLOAD')
                        }
                        //$scope.$emit('UNLOAD')
                    }).catch(function (response) {
                        //$scope.$emit('UNLOAD')
                        console.log(response);
                    });
                }
                else {
                    console.log('booking request');
                    console.log(JSON.stringify($scope.result.booking_request));
                    Flight.flightBooking($scope.result.booking_request).then(function (bookingResponse) {
                        console.log('booking Details');
                        console.log(bookingResponse.data);

                        $scope.bookingResponse = bookingResponse.data;
                        if ($scope.bookingResponse.Response.BookingId != null) {
                            console.log('if');
                            var ticket = {
                                "EndUserIp": "127.0.0.1",
                                "TokenId": window.localStorage['flight_token_id'],
                                "TraceId": $scope.bookingResponse.TraceId,
                                "PNR": $scope.bookingResponse.Response.PNR,
                                "BookingID": $scope.bookingResponse.Response.BookingId,
                                "MemberMobileNo": $scope.result.booking_request.MemberMobileNo,
                                "MemberMobilePin": $scope.result.booking_request.MemberMobilePin
                            };
                            console.log(ticket);
                            Flight.flightTicket(ticket).then(function (ticketResponse) {
                                $scope.ticketResponse = ticketResponse.data.Response;
                                 trace_id = ticketResponse.data.TraceId;
                                console.log($scope.ticketResponse);
                                if ($scope.ticketResponse!=null) {
                                    $scope.storeFlightBookingDetails();
                                }
                                //$scope.$emit('UNLOAD')
                            }).catch(function (response) {
                                //$scope.$emit('UNLOAD')
                                $scope.ticketResponse =  bookingResponse.data.Response;
                                $scope.storeFlightBookingDetails();
                                console.log(response);
                            });
                        }
                        else {
                            console.log('else');
                            console.log($scope.bookingResponse);
                            //$scope.$emit('UNLOAD')
                        }
                    }).catch(function (response) {
                        $scope.$emit('UNLOAD')
                        console.log(response);
                    });
                }
        };
        $scope.storeFlightBookingDetails = function(){
            $scope.$emit('LOAD')
            var saveData = {
                "pnr":$scope.ticketResponse.PNR,
                "airline":$scope.ticketResponse.FlightItinerary.Segments[0].Airline.AirlineName,
                "booking_id":$scope.ticketResponse.BookingId,
                "ssr_denied":$scope.ticketResponse.SSRDenied,
              //  "ssr_prod_type":$scope.ticketResponse.ProdType,
            //    "confirmation_no":$scope.ticketResponse.ConfirmationNumber,
            //    "payment_reference_no":$scope.ticketResponse.PaymentReferenceNumber,
                "ref_id":trace_id,
                "status_code":$scope.ticketResponse.TicketStatus,
                //"status_description":$scope.ticketResponse.Status.Description,
                //"status_category":$scope.ticketResponse.Status.Category,
                "source":$scope.ticketResponse.FlightItinerary.Segments[0].Origin.Airport.CityName,
                "destination":$scope.ticketResponse.FlightItinerary.Segments[0].Destination.Airport.CityName,
                "source_value" : $scope.ticketResponse.Source,
                "departure_date":$scope.ticketResponse.FlightItinerary.Segments[0].Origin.DepTime
            };
            console.log(saveData);
            Flight.saveDetails(saveData).then(function (dd) {
                console.log('successfully saved');
                console.log(dd);
                $scope.s = true;
                $scope.$emit('UNLOAD')
            }).catch(function (response){
                console.log(response);
                $scope.$emit('UNLOAD')
                console.log('some error occurred');
            });
        }
    });



/*
var d = {
    "ResponseStatus": 0, "TraceId": "386b7d7a-e313-4501-aea5-c17348c61ba8",
    "Response": {
        "BookingId": 183773,
        "IsPriceChanged": false,
        "IsTimeChanged": false,
        "SSRMessage": null,
        "TicketStatus": 1,
        "Message": null,
        "SSRDenied": false,
        "ResponseStatus": 0,
        "FlightItinerary": {
            "Segments": [
                {
                    "Origin": {
                        "Airport": {
                            "CountryName": "India",
                            "CityCode": "DEL",
                            "CountryCode": "IN",
                            "CityName": "Delhi",
                            "Terminal": "1D",
                            "AirportCode": "DEL",
                            "AirportName": "Indira Gandhi Airport"
                        },
                        "DepTime": "06/04/2016 16:55:00"
                    },
                    "Craft": "320",
                    "Remark": null,
                    "StopPoint": "",
                    "FlightStatus": "Confirmed",
                    "SegmentIndicator": 1,
                    "IsETicketEligible": false,
                    "Destination": {
                        "ArrTime": "06/04/2016 19:45:00",
                        "Airport": {
                            "CountryName": "India",
                            "CityCode": "BLR",
                            "CountryCode": "IN",
                            "CityName": "Bangalore",
                            "Terminal": "",
                            "AirportCode": "BLR",
                            "AirportName": "Hindustan"
                        }
                    },
                    "AirlinePNR": "",
                    "TripIndicator": 1,
                    "StopOver": false,
                    "Status": "HK",
                    "Mile": "0",
                    "Airline": {
                        "AirlineCode": "6E",
                        "OperatingCarrier": "",
                        "AirlineName": "IndiGo",
                        "FlightNumber": 481,
                        "FareClass": "O"
                    },
                    "Duration": "170",
                    "StopPointArrivalTime": "2016-06-04T19:45:00",
                    "GroundTime": "0",
                    "StopPointDepartureTime": "2016-06-04T16:55:00"
                }],
            "Destination": "BLR",
            "Source": 6,
            "NonRefundable": false,
            "Status": 5,
            "CreditNoteCreatedOn": null,
            "BookingId": "183773",
            "InvoiceNo": "DW/1617/2935",
            "AirlineCode": "6E",
            "CancellationCharges": null,
            "IsDomestic": true,
            "Fare": {
                "Discount": 0.0,
                "CommissionEarned": 53.02,
                "Currency": "INR",
                "Tax": 1301.0,
                "ChargeBU": [{"value": 12.54, "key": "MARKUP"}, {
                    "value": 0.0,
                    "key": "CONVENIENCECHARGE"
                }, {"value": 50.0, "key": "OTHERCHARGE"}],
                "AdditionalTxnFeeOfrd": 0.0,
                "IncentiveEarned": 0.0,
                "TdsOnIncentive": 0.0,
                "YQTax": 200.0,
                "ServiceFee": 10000.0,
                "TdsOnPLB": 6.7,
                "BaseFare": 3401.0,
                "AdditionalTxnFeePub": 0.0,
                "PLBEarned": 33.48,
                "TdsOnCommission": 10.6,
                "PublishedFare": 14764.54,
                "OfferedFare": 4678.04,
                "OtherCharges": 62.54
            },
            "FareRules": [{
                "Origin": "DEL",
                "FareBasisCode": "O",
                "FareRestriction": null,
                "Destination": "BLR",
                "FareRuleDetail": "Fare rules for 6E",
                "Airline": "6E"
            }],
            "Error": null,
            "IsLCC": true,
            "Origin": "DEL",
            "Passenger": [{
                "City": "Delhi",
                "FirstName": "Trivedi",
                "Title": "Mr",
                "LastName": "Nupoora",
                "DateOfBirth": "06/19/2003 00:00:00",
                "PaxId": 249834,
                "Email": "abc@jbspl.com",
                "FFAirline": null,
                "Fare": {
                    "AirTransFee": 0.0,
                    "PLBEarned": 33.48,
                    "CommissionEarned": 53.02,
                    "Currency": "INR",
                    "Tax": 1301.0,
                    "ChargeBU": [{"value": 12.54, "key": "MARKUP"}, {
                        "value": 0.0,
                        "key": "CONVENIENCECHARGE"
                    }, {"value": 50.0, "key": "OTHERCHARGE"}],
                    "AdditionalTxnFeeOfrd": 0.0,
                    "IncentiveEarned": 0.0,
                    "TdsOnIncentive": 0.0,
                    "YQTax": 200.0,
                    "ServiceFee": 10000.0,
                    "TdsOnPLB": 6.7,
                    "BaseFare": 3401.0,
                    "PublishedFare": 14764.54,
                    "AdditionalTxnFeePub": 0.0,
                    "TransactionFee": 0.0,
                    "TdsOnCommission": 10.6,
                    "Discount": 0.0,
                    "OfferedFare": 4678.04,
                    "OtherCharges": 62.54
                },
                "ContactNo": "8787878787",
                "CountryCode": "IN",
                "AddressLine2": "demo",
                "AddressLine1": "demo",
                "Nationality": "IN",
                "Ticket": {
                    "Status": "OK",
                    "TicketNumber": "C58NFC",
                    "ServiceFeeDisplayType": "ShowInTax",
                    "Remarks": "",
                    "ValidatingAirline": "708",
                    "TicketId": 166677,
                    "IssueDate": "06/01/2016 15:11:24"
                },
                "IsLeadPax": true,
                "Gender": 1,
                "Baggage": null,
                "PassportNo": "",
                "MealDynamic": null,
                "Meal": null,
                "PaxType": 1,
                "SegmentAdditionalInfo": [{"Baggage": "20 Kg", "Meal": "", "NVB": null, "NVA": null, "FareBasis": "O"}],
                "Seat": null,
                "CountryName": "India",
                "FFNumber": "",
                "PassportExpiry": null
            }],
            "FareType": "PUB",
            "PNR": "C58NFC",
            "ValidatingAirlineCode": "6E",
            "InvoiceCreatedOn": "06/01/2016 15:11:24",
            "AirlineRemark": "",
            "CreditNoteNo": null
        },
        "PNR": "C58NFC"
    }, "Error": {"ErrorCode": 0, "ErrorMessage": ""}
}*/
