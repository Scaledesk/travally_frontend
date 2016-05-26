angular.module('Travally')
    .controller('FlightPaymentSuccessController', function($http, $scope,Flight,$auth, $routeParams, serverConfig, BusServices, $sce) {
        $scope.$emit('LOAD')
        $scope.s = false;
        id = $routeParams.id;
        Flight.getTransaction(id).then(function (Res) {
            console.log("booking response");
            $scope.result =  Res.data.data;
            console.log($scope.result);
            $scope.$emit('UNLOAD')
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
                        $scope.ticketResponse = ticketResponse.data;
                        console.log(ticketResponse.data);

                            //$scope.storeFlightBookingDetails();

                        $scope.$emit('UNLOAD')
                    }).catch(function (response) {
                        $scope.$emit('UNLOAD')
                        console.log(response);
                    });
                }
                else {

                    console.log('booking request');
                    console.log(JSON.stringify($scope.result.booking_request));
                    Flight.flightBooking($scope.result.booking_request).then(function (bookingResponse) {
                        console.log('booking Details');

                        $scope.bookingResponse = bookingResponse.data;
                        if ($scope.bookingResponse.BookingId != null) {
                            console.log('if');
                            var ticket = {
                                "BookingID": $scope.bookingResponse.BookingId,
                                "Origin": $scope.result.booking_request.Origin,
                                "Destination": $scope.result.booking_request.Destination,
                                "Segment": $scope.result.booking_request.Segment,
                                "FareType": $scope.result.booking_request.FareType,
                                "FareRule": $scope.result.booking_request.FareRule,
                                "Fare": $scope.result.booking_request.Fare,
                                "Passenger": $scope.result.booking_request.Passenger,
                                "Remarks": $scope.result.booking_request.Remarks,
                                "InstantTicket": $scope.result.booking_request.InstantTicket,
                                "PaymentInformation": $scope.result.booking_request.PaymentInformation,
                                "Source": $scope.result.booking_request.Source,
                                "SessionId": $scope.result.booking_request.SessionId,
                                "IsOneWayBooking": true,
                                "CorporateCode": "",
                                "TourCode": "",
                                "Endorsement": "",
                                "PromotionalPlanType": $scope.result.booking_request.PromotionalPlanType,
                                "MemberMobileNo": $scope.result.booking_request.MemberMobileNo,
                                "MemberMobilePin": $scope.result.booking_request.MemberMobilePin
                            };
                            console.log(ticket);
                            Flight.flightTicket(ticket).then(function (ticketResponse) {
                                $scope.ticketResponse = ticketResponse.data;
                                console.log($scope.ticketResponse);

                                /*if ($scope.ticketResponse.Status.Description == Sucessfull) {
                                }*/

                                // $scope.storeFlightBookingDetails();

                                $scope.$emit('UNLOAD')
                            }).catch(function (response) {
                                $scope.$emit('UNLOAD')
                                console.log(response);
                            });
                        }
                        else {
                            console.log('else');
                            console.log($scope.bookingResponse);
                            $scope.$emit('UNLOAD')
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
                "airline":$scope.result.booking_request.Segment[0].Airline.AirlineName,
                "booking_id":$scope.ticketResponse.BookingId,
                "ssr_denied":$scope.ticketResponse.SSRDenied,
                "ssr_prod_type":$scope.ticketResponse.ProdType,
                "confirmation_no":$scope.ticketResponse.ConfirmationNumber,
                "payment_reference_no":$scope.ticketResponse.PaymentReferenceNumber,
                "ref_id":$scope.ticketResponse.Status.RefId,
                "status_code":$scope.ticketResponse.Status.StatusCode,
                "status_description":$scope.ticketResponse.Status.Description,
                "status_category":$scope.ticketResponse.Status.Category,
                "source":$scope.result.booking_request.Segment[0].Origin.CityName,
                "destination":$scope.result.booking_request.Segment[0].Destination.CityName,
                "source_value" : $scope.result.booking_request.Source,
                "departure_date":$scope.result.booking_request.Segment[0].DepTIme
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