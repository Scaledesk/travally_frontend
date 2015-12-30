angular.module('Travally').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
      .when('/home', {
        templateUrl: "templates/home.html",
        controller: "HomeController"
      })
      .when('/search/:source/:destination/:journey_date/:no_of_passenger', {
        templateUrl: "templates/search.html",
        controller: "SearchController"
      }).when('/about-us', {
        templateUrl: "templates/about-us.html",
        controller: "AboutController"
      }).when('/privacy-policy', {
        templateUrl: "templates/privacy-policy.html",
        controller: "PrivacyController"
      }).when('/contact-us', {
        templateUrl: "templates/contact-us.html",
        controller: "ContactController"
      }).when('/hotel-details/:city/:check_in/:check_out', {
        templateUrl: "templates/hotels-search-results-3.html",
        controller: "SearchHotelController"
      }).when('/login', {
        templateUrl: "templates/login.html",
        controller: "AuthenticationController"
      }).when('/register', {
        templateUrl: "templates/register.html",
        controller: "RegistrationController"
      }).when('/profile/:target', {
        templateUrl: "templates/Profile.html",
        controller: "ProfileController"
      }).when('/forgotPassword', {
        templateUrl: "templates/forgotPassword.html",
        controller: "AuthenticationController"
      }).when('/resetForgotPassword', {
        templateUrl: "templates/resetForgotPassword.html",
        controller: "ResetPasswordController"
      }).when('/profile-setting', {
        templateUrl: "templates/Profile-setting.html",
        controller: "ProfileController"
      }).when('/profile-booking-history', {
        templateUrl: "templates/my-booking-history.html",
        controller: "ProfileController"
      }).when('/flight-search/:source/:destination/:departureDate/:passenger', {
        templateUrl: "templates/flight-search-results.html",
        controller: "SearchFlightController"
      }).when('/bookingDetail', {
        templateUrl: "templates/flight-booking-details.html",
        controller: "BookingFlightController"
      });
});