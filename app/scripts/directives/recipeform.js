'use strict';

/**
 * @ngdoc directive
 * @name yeomanTestApp.directive:recipeform
 * @description
 * # recipeform
 */
angular.module('recipeBookApp')
  .directive('recipeform', function () {
    return {
      templateUrl: 'views/recipeForm.html',
      restrict: 'E'
    };
  });
