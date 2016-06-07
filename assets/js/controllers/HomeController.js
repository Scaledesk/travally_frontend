angular.module('Travally')
// inject the Activation service into our controller
    .controller('HomeController', function(TrainBetweenStation, Hotel,$cookies, StationCode,serverConfig, $http, $scope, $location,$filter, Flight, BusServices,$rootScope ) {
        //var d = $location.search().code;
        $scope.show_box = false;
        var auth = {
            "EndUserIp":"127.0.0.1",
            "MemberMobileNo":serverConfig.memberMobileNumber,
            "MemberMobilePin":serverConfig.memberMobilePin
        };
        Flight.authentication(auth).then(function(res){
            console.log('token id gsdh');
            console.log(res);
            window.localStorage['flight_token_id'] = res.data.TokenId;
        }).catch(function(res){
            console.log(res);
        });
        $scope.source = {};
        $scope.destination = {};
        $scope.tab = 'train';
        $scope.master_stations = [
            {
                "CityId":"2542",
                "name":"Allahabad",
                "SCode":"ALD",
                "FCode":"IXD"
            },
            {
                "CityId":"1337",
                "name":"Lucknow",
                "SCode":"LKO",
                "FCode":"LKO"
            },
            {
                "CityId":"1327",
                "name":"Kanpur",
                "SCode":"CNB",
                "FCode":"KNU"
            },
            {
                "CityId":"1492",
                "name":"Delhi",
                "SCode":"NDLS",
                "FCode":"DEL"
            },
            {
                "CityId":"1322",
                "name":"Agra",
                "SCode":"AGA",
                "FCode":"AGR"
            },
            {
                "CityId":"3",
                "name":"Bangalore",
                "SCode":"BNC",
                "FCode":"BLR"
            },
            {
                "CityId":"1333",
                "name":"Bareilly",
                "SCode":"BRY",
                "FCode":"LKO"
            }
        ];



        /*$scope.tab = 'train';
        $scope.selectedItem = {};
        $scope.master_stations = StationCode.get();


        $scope.source = {};
        $scope.destination = {};

        $scope.cityData = Hotel.getCity();

        $scope.city = {};
        $scope.cityDestinaton = {};


        $scope.hotelCityData = Hotel.getHotelCity();
        $scope.hotelCity = {};
        /!**
         * function for refreshing hotel city details
         * @param query
         * @returns {Array}
         *!/
        $scope.refreshHotelCity = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.hotelCity = $filter('filter')($scope.hotelCityData,{city_name:query})
        };
        $scope.flightSearchButtonText = "Search Flight";
        $scope.flightSearchButton = false;
        BusServices.getAllCities().then(function (responseCities) {
            $scope.Bus_Cities = responseCities.data.WSBusCityList;
            console.log('success bus city');
            console.log(JSON.stringify(responseCities));
            $scope.$emit('UNLOAD')
        }).catch(function (response) {
            console.log('error');
            console.log(response);
            $scope.$emit('UNLOAD')
        });
        $scope.BusSourceCity = {};
        $scope.BusDestinationCity = {};
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
        };*/



        /**
         * Get all cities for bus
         * Code for bus search details
         */
        /*$scope.refreshBusSources = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.BusSourceCity = $filter('filter')($scope.Bus_Cities,{CityName:query})
        };
        $scope.refreshBusDestinations = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.BusDestinationCity = $filter('filter')($scope.Bus_Cities,{CityName:query})
        };*/
        /**
         * function for city detail search for hotel and flight
         */
       /* $scope.refreshCity = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.city = $filter('filter')($scope.cityData,{name:query})
        };
        $scope.refreshDestinationCity = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.cityDestinaton = $filter('filter')($scope.cityData,{name:query})
        };*/
        /**
         * function for searching for hotel
         * @param hotel
         */
        /*$scope.searchHotel =function(hotel){
            var city_id = $scope.hotelCity.selected.city_id;
            var city_name = $scope.hotelCity.selected.city_name;
            var country_code = $scope.hotelCity.selected.country_id;
            var check_in = hotel.check_in;
            var check_out = hotel.check_out;
            //var passenger = formData.passenger;
            $location.path('/hotel-details/'+city_id+'/'+city_name+'/'+country_code+'/'+check_in+'/'+check_out);
        };*/




        $scope.refreshSources = function(query){
            console.log(query);
           // if(query == null) return [];
            //if(query.length < 3) return [];
            $scope.sources = $filter('filter')($scope.master_stations,{name:query})
        };
        $scope.refreshDestinations = function(query){
            //if(query == null) return [];
            //if(query.length < 3) return [];
            $scope.destinations = $filter('filter')($scope.master_stations,{name:query})
        };





        /**
         * function for search flight details
         * @param flight
         */
        /*$scope.searchFlight = function(flight){
            console.log(flight);
            var origin = $scope.city.selected.code;
            var destination = $scope.cityDestinaton.selected.code;
            var departureDate = flight.date;
            var returnDate = flight.returnDate;
            var Adult = flight.passenger;
            $location.path('/flight-search/'+origin+'/'+destination+'/'+departureDate+'/'+Adult);
        };*/


        /**
         * function for search train result
         * @param formData
         */
        $scope.search =function(formData){
            $cookies.putObject('source',$scope.source);
            $cookies.putObject('destination',$scope.destination);
            $cookies.putObject('formData',formData);
            var origin = $scope.source.selected.FCode;
            var destination = $scope.destination.selected.FCode;
            var departureDate = formData.date;
            var Adult = formData.passenger;
            $location.path('/flight-search/'+origin+'/'+destination+'/'+departureDate+'/'+Adult);
            /*var source = $scope.source.selected.code;
            var dest = $scope.destination.selected.code;
            var dt = formData.date;
            var passenger = formData.passenger;
            $location.path('/search/'+source+'/'+dest+'/'+dt+'/'+passenger);*/
        };
        /**
         * Search Bus Result
         * @param Bus
         */
        /*$scope.searchBuses = function(Bus){
            var sourceId = $scope.BusSourceCity.selected.CityId;
            var destinationId = $scope.BusDestinationCity.selected.CityId;
            var sourceName = $scope.BusSourceCity.selected.CityName;
            var destinationName = $scope.BusDestinationCity.selected.CityName;
            var sourceDate = Bus.journeyDate;

            $location.path('/bus-search/'+sourceId+'/'+destinationId+'/'+sourceName+'/'+destinationName+'/'+sourceDate);
        };*/
    });