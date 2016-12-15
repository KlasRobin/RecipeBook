'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:RecipecontrollerCtrl
 * @description
 * # RecipecontrollerCtrl
 * Controller of the yeomanTestApp
 */
angular.module('recipeBookApp')
  .controller('RecipeCtrl', ['$scope', '$rootScope', '$location', 'RecipeService', function($scope, $rootScope, $location, RecipeService) {

    $scope.user = $rootScope.loggedInUser;
    $scope.recipies = [];
    $scope.categories = [];

    $scope.newRecipe = {};
    $scope.ingredients = [];

    if($scope.user == undefined) {
      $location.path('/');
    }

    RecipeService.getRecipies().then(function(data) {
      $scope.recipies = data;
    });

    RecipeService.getCategories().then(function(data) {
      $scope.categories = data;
    });

    $scope.addIngredient = function(){
      $scope.ingredients.push("");
    }

    $scope.removeIngredient = function(index){
      $scope.ingredients.splice(index, 1);
    }

    $scope.postRecipe = function() {
      var temp = "";
      for (var i = $scope.ingredients.length - 1; i >= 0; i--) {
       temp += $scope.ingredients[i];
       if(i !== 0) {
          temp += ',';
       }
      }
      $scope.newRecipe.ingredients = temp;
      RecipeService.postRecipe($scope.newRecipe).then(function(data) {
        console.log(data);
      });
    };

  }]);