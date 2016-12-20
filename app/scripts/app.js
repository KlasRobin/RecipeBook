'use strict';

/**
 * @ngdoc overview
 * @name yeomanTestApp
 * @description
 * # yeomanTestApp
 *
 * Main module of the application.
 */
angular
  .module('recipeBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
      }).when('/recipeBook', {
        templateUrl: 'views/recipeBook.html',
        controller: 'RecipeCtrl',
        controllerAs: 'ctrl'
      }).when('/recipeBook/:id', {
        templateUrl: 'views/singlerecipe.html',
        controller: 'SinglerecipeCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$window',
  function($rootScope, $window) {
    /* Initialize facebook SDK */
       window.fbAsyncInit = function() {
        FB.init({
          appId      : '229547214140365',
          xfbml      : true,
          version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
      };

      (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));  
}]);

