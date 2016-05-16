angular.module('Travally').factory('BusServices', function($http, serverConfig) {
    var flightBookData = {};
    var flightData = {};
    return {
        getAllCities: function () {
            /*return $http({
                method: 'GET',
                url: 'http://api.jbspl.com/staging/api/BusBooking/GetAllCities',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password
                }
            });*/
            return $http({
                method: 'POST',
                url: 'http://52.77.238.174/redirect_request',
                headers: {
                    'Content-Type': 'application/json'
                },
                data:{
                    method: 'GET',
                    url: 'BusBooking/GetAllCities'
                }
            });
        },
        /*searchBuses: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://api.jbspl.com/staging/api/BusBooking/Search',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                },
                data: dt
            });
        },*/
        searchBuses: function (dt) {
         return $http({
         method: 'POST',
         url: 'http://52.77.238.174/redirect_request',
         headers: {
             'Content-Type': 'application/json'
         },
         data:{
             method: 'POST',
             url: 'BusBooking/Search',
             payload:dt
         }
         });
         },
        BookBus: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://52.77.238.174/redirect_request',
                headers: {
                    'Content-Type': 'application/json'
                },
                data:{
                    method: 'POST',
                    url: 'BusBooking/Book',
                    payload:dt
                }
            });
            /*return $http({
                method: 'POST',
                url: 'http://api.jbspl.com/staging/api/BusBooking/Book',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                },
                data: dt
            });*/
        },
            CancelBooking: function (dt) {
            return $http({
            method: 'POST',
            url: 'http://52.77.238.174/redirect_request',
            headers: {
                'Content-Type': 'application/json'
            },
                data:{
                    method: 'POST',
                    url: 'BusBooking/CancelBooking',
                    payload:dt
                }
            });
        },
        getSeatLayout: function (dt) {
        return $http({
            method: 'POST',
            url: 'http://52.77.238.174/redirect_request',
            headers: {
                'Content-Type': 'application/json'
            },
            data:{
                method: 'POST',
                url: 'BusBooking/GetSeatLayOut',
                payload:dt
            }
        });
    },
        saveBusBookingDetails: function (bookData) {
            return $http({
                method: 'POST',
                url: serverConfig.travally_backend+'/addBusBooking',
                data: bookData
            });
        }
    }
});
