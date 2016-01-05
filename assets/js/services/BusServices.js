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
        },
        searchBuses: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://api.jbspl.com/api/BusBooking/Search',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                },
                data: dt
            });
        },
        BookBus: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://api.jbspl.com/api/BusBooking/Book',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                },
                data: dt
            });
        },
        getSeatLayout: function (dt) {
        return $http({
            method: 'POST',
            url: 'http://api.jbspl.com/api/BusBooking/GetSeatLayOut',
            headers: {
                'x-UserName':serverConfig.user_name,
                'x-Password':serverConfig.password,
                'Content-Type': 'application/json'
            },
            data: dt
        });
    }
    }
});
