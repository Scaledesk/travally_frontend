angular.module('Travally').factory('Registration', function($resource,serverConfig){
    return $resource(serverConfig.travally_backend+'auth/register');
});