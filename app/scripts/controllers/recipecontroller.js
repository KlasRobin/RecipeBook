'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:RecipecontrollerCtrl
 * @description
 * # RecipecontrollerCtrl
 * Controller of the yeomanTestApp
 */
angular.module('recipeBookApp')
  .controller('RecipeCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {

    $scope.user = $rootScope.loggedInUser;

    if($scope.user == undefined) {
      $location.path('/');
    }

  }]);