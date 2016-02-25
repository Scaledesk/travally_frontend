angular.module('Travally').factory('Profile', function($http,serverConfig) {
    return {
        // get all the Inbox Messages
        get : function() {
            return $http({
                method: 'GET',
                url: serverConfig.travally_backend+'getProfile/' /*+ '?token=' + window.localStorage['satellizer_token']*/
            });
        },
        update: function(data) {
            return $http({
                method:'PUT',
                url : serverConfig.travally_backend+'/profileUpdate', /*+ '?token=' + window.localStorage['satellizer_token'],*/
                data : data
            });
        },
        getFlightBookingDetails: function() {
            return $http({
                method:'GET',
                url : serverConfig.travally_backend+'/getFlightBookingDetails' /*+ '?token=' + window.localStorage['satellizer_token'],*/

            });
        },
        getBusBookingDetails: function() {
            return $http({
                method:'GET',
                url : serverConfig.travally_backend+'/getBusBookingDetails' /*+ '?token=' + window.localStorage['satellizer_token'],*/

            });
        },
        saveCancellationDetails: function(data) {
            return $http({
                method:'POST',
                url : serverConfig.travally_backend+'/addCancellation', /*+ '?token=' + window.localStorage['satellizer_token'],*/
                data : data

            });
        },
        getCancellationDetails: function() {
            return $http({
                method:'GET',
                url : serverConfig.travally_backend+'/getCancellation' /*+ '?token=' + window.localStorage['satellizer_token'],*/
            });
        },

        changePassword: function(data) {
        return $http({
            method:'POST',
            url : serverConfig.travally_backend+'/changePassword', /*+ '?token=' + window.localStorage['satellizer_token'],*/
            data : data
           });
        },
        forgotPassword: function(data) {
        return $http({
            method:'POST',
            url : serverConfig.travally_backend+'/forgotPassword', /*+ '?token=' + window.localStorage['satellizer_token'],*/
            data : data
        });
    },

        resetForgotPassword: function(data) {
        return $http({
            method:'POST',
            url : serverConfig.travally_backend+'/resetForgotPassword', /*+ '?token=' + window.localStorage['satellizer_token'],*/
            data : data
        });
    }



    }
});