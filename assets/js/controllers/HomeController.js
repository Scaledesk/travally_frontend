angular.module('Travally')
// inject the Activation service into our controller
    .controller('HomeController', function(TrainBetweenStation, Hotel, StationCode, $http, $scope, $location,$filter, Flight, BusServices ) {
        //var d = $location.search().code;
        $scope.tab = 'train';
        $scope.selectedItem = {};
        $scope.master_stations = StationCode.get();
        $scope.source = {};
        $scope.destination = {};

        $scope.refreshSources = function(query){
            console.log(query);
            if(query == null) return [];
            if(query.length < 3) return [];
                $scope.sources = $filter('filter')($scope.master_stations,{name:query})
        };
        $scope.refreshDestinations = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.destinations = $filter('filter')($scope.master_stations,{name:query})
        };

        $scope.search =function(formData){
            var source = $scope.source.selected.code;
            var dest = $scope.destination.selected.code;
            var dt = formData.date;
            var passenger = formData.passenger;
            $location.path('/search/'+source+'/'+dest+'/'+dt+'/'+passenger);
        };


        /**
         * function for city detail search for hotel and flight
         */
        $scope.cityData = Hotel.getCity();
        $scope.city = {};
        $scope.cityDestinaton = {};
        $scope.refreshCity = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.city = $filter('filter')($scope.cityData,{name:query})
        };
        $scope.refreshDestinationCity = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.cityDestinaton = $filter('filter')($scope.cityData,{name:query})
        };


        /**
         * function for searching for hotel
         * @param hotel
         */
        $scope.searchHotel =function(hotel){
            var city = $scope.city.selected.code;
            var check_in = hotel.check_in;
            var check_out = hotel.check_out;
            //var passenger = formData.passenger;
            $location.path('/hotel-details/'+city+'/'+check_in+'/'+check_out);
        };

        $scope.flightSearchButtonText = "Search Flight";
        $scope.flightSearchButton = false;
        /**
         * function for search flight details
         * @param flight
         */
        $scope.searchFlight = function(flight){
            console.log(flight);
            var origin = $scope.city.selected.code;
            var destination = $scope.cityDestinaton.selected.code;
            var departureDate = flight.date;
            var returnDate = flight.returnDate;
            var Adult = flight.passenger;
            $location.path('/flight-search/'+origin+'/'+destination+'/'+departureDate+'/'+Adult);
        };

        /**
         * Get all cities for bus
         * Code for bus search details
         */

        BusServices.getAllCities().then(function (responseCities) {
            $scope.Bus_Cities = responseCities.data.WSBusCityList;
        }).catch(function (response) {

        });
        $scope.BusSourceCity = {};
        $scope.BusDestinationCity = {};

        $scope.refreshBusSources = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.BusSourceCity = $filter('filter')($scope.Bus_Cities,{CityName:query})
        };
        $scope.refreshBusDestinations = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.BusDestinationCity = $filter('filter')($scope.Bus_Cities,{CityName:query})
        };

        $scope.searchBuses = function(Bus){
            var sourceId = $scope.BusSourceCity.selected.CityId;
            var destinationId = $scope.BusDestinationCity.selected.CityId;
            var sourceName = $scope.BusSourceCity.selected.CityName;
            var destinationName = $scope.BusDestinationCity.selected.CityName;
            var sourceDate = Bus.journeyDate;

            $location.path('/bus-search/'+sourceId+'/'+destinationId+'/'+sourceName+'/'+destinationName+'/'+sourceDate);
        };
    });