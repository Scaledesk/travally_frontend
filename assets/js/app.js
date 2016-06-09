angular.module('Travally', ['ngRoute',  'ngResource', 'satellizer','ngCookies', 'ui.select', 'ngSanitize', '720kb.datepicker', 'ui.bootstrap', 'ui.date', 'angularUtils.directives.dirPagination'])
    .config(function(paginationTemplateProvider) {
        paginationTemplateProvider.setPath('assets/js/includes/angular-utils-pagination/dirPagination.tpl.html');
    })
    .constant("serverConfig", {
        "address": "http://api.railwayapi.com/",
       // "apiKey": "/apikey/lgwzv8357",
        "apiKey": "/apikey/xjatc7210",
      //  "apiKey": "/apikey/ovjxl3320",
      //  "travally_backend" : "http://54.169.181.84/",
        "travally_backend" : "http://localhost:8000/",
        "user_name" : "BIS151",
        "password" : "iuW109trq",
        "memberMobileNumber" : "9983772777",
        "memberMobilePin" : "6366"
    })
    .config(
    function($authProvider,serverConfig){
        $authProvider.tokenName = 'access_token';
        $authProvider.google({
            url: serverConfig.travally_backend+'auth/google',
            clientId: '108324799264-csvj5jb9jdp97lbtli6m86jqrvaltlq4.apps.googleusercontent.com',
            clientSecret: 'dGkHHbHbBkDVYI2mIz0rk0NU',
            redirectUri: 'http://localhost:3000/'
        });
        $authProvider.facebook({
            url: serverConfig.travally_backend+'auth/facebook',
            clientId: '760358360764321',
            clientSecret: '2382bbcae2a9e1083688f4a4cbe2931e',
            redirectUri: 'http://localhost:3000/'
        });
        $authProvider.loginUrl = serverConfig.travally_backend+'auth/login';
    });

/*
$authProvider.google({
    url: '/auth/google',
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
    redirectUri: window.location.origin,
    requiredUrlParams: ['scope'],
    optionalUrlParams: ['display'],
    scope: ['profile', 'email'],
    scopePrefix: 'openid',
    scopeDelimiter: ' ',
    display: 'popup',
    type: '2.0',
    popupOptions: { width: 452, height: 633 }
});
*/
