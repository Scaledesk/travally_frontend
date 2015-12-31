angular.module('Travally').factory('BusServices', function($http, serverConfig) {
    var flightBookData = {};
    var flightData = {};
    return {
        getAllCities: function () {
            return $http({
                method: 'GET',
                url: 'http://api.jbspl.com/api/BusBooking/GetAllCities',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                }
            });
        }
    }
});
