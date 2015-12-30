angular.module('Travally').factory('Flight', function($http, serverConfig) {
    var flightBookData = {};
    var flightData = {};
    return {
        searchFlight: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://api.jbspl.com/api/AirlineBooking/Search',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                },
                data: dt
            });
        },
        searchGetFareRule: function (dt) {
        return $http({
            method: 'POST',
            url: 'http://api.jbspl.com/api/AirlineBooking/GetFareRule',
            headers: {
                'x-UserName':serverConfig.user_name,
                'x-Password':serverConfig.password,
                'Content-Type': 'application/json'
            },
            data: dt
        });
    },
        flightBooking: function (bookData) {
        return $http({
            method: 'POST',
            url: 'http://api.jbspl.com/api/AirlineBooking/Book',
            headers: {
                'x-UserName':serverConfig.user_name,
                'x-Password':serverConfig.password,
                'Content-Type': 'application/json'
            },
            data: bookData
        });
    },
        flightGetFareQuote: function (bookData) {
        return $http({
            method: 'POST',
            url: 'http://api.jbspl.com/api/AirlineBooking/GetFareQuote',
            headers: {
                'x-UserName':serverConfig.user_name,
                'x-Password':serverConfig.password,
                'Content-Type': 'application/json'
            },
            data: bookData
        });
    },
        setflightBookData: function (data) {
        flightBookData = data;
    },
        getflightBookData: function() {
        return flightBookData;
    },
        setFlightData: function (data) {
            flightData = data;
        },
        getFlightData: function() {
            return flightData;
        }
    }
});
