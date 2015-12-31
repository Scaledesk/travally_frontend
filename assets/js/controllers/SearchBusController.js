angular.module('Travally')
    .controller('SearchBusController', function($http, $scope, $routeParams, $filter, $location, serverConfig, BusServices) {
        $scope.SourceId = $routeParams.SourceId;
        $scope.DestinationId = $routeParams.DestinationId;
        $scope.SourceName = $routeParams.SourceName;
        $scope.DestinationName = $routeParams.DestinationName;
        $scope.DateOfJourney = $routeParams.DateOfJourney;

        var searchBusesDetails = {
            "SourceId": $scope.SourceId,
            "DestinationId": $scope.DestinationId,
            "SourceName": $scope.SourceName,
            "DestinationName": $scope.DestinationName,
            "DateOfJourney": $scope.DateOfJourney,
            "IsDomestic": true,
            "MemberMobileNo": serverConfig.memberMobileNumber,
            "MemberMobilePin": serverConfig.memberMobilePin
        };
        $scope.$emit('LOAD')
        BusServices.searchBuses(searchBusesDetails).then(function (responseBuses) {
            console.log(responseBuses);
            $scope.Bus_Result = responseBuses.data.BusSearchResult;
            $scope.$emit('UNLOAD')
        }).catch(function (response) {
            $scope.$emit('UNLOAD')
            console.log(response);
        });

        $scope.bookingDetails = function(data) {



        };


        $scope.filterFlightDetail=function(){
            $scope.flightResult = $filter('filter')($scope.flightResultData,{fareClass:$scope.checkboxModel.fareClass,stop:$scope.fareStop.stop})
        }
    });



