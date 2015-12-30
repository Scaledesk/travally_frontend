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