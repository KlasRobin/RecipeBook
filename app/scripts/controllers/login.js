'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:Login7Ctrl
 * @description
 * # Login7Ctrl
 * Controller of the yeomanTestApp
 */
angular.module('recipeBookApp')
  .controller('LoginCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
   
   /* Call FBSDK to login */
    $scope.login = function() {
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          FB.api('/me', function(user) {
            $rootScope.loggedInUser = user;
            $location.path('/recipeBook');
          });
        } else {
          FB.login(function(response) {
            if (response.authResponse) {
              FB.api('/me', function(user) {
                $rootScope.loggedInUser = user;
                $location.path('/recipeBook');
              });
            } 
          });
        }
      });
    };
  }]);