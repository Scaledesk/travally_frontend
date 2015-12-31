angular.module('Travally')
    .controller('SearchBusController', function($http, $scope, $routeParams, $filter, $location, serverConfig) {
        $scope.source = $routeParams.source;
        $scope.destination = $routeParams.destination;
        $scope.departureDate = $routeParams.departureDate;
        $scope.passenger = $routeParams.passenger;
        console.log($scope.source);
        console.log($scope.destination);
        console.log($scope.departureDate);
        console.log($scope.passenger);




        $scope.bookingDetails = function(data) {



        };


        $scope.filterFlightDetail=function(){
            $scope.flightResult = $filter('filter')($scope.flightResultData,{fareClass:$scope.checkboxModel.fareClass,stop:$scope.fareStop.stop})
        }
    });



