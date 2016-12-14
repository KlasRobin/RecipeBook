'use strict';

describe('Controller: RecipecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTestApp'));

  var RecipecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipecontrollerCtrl = $controller('RecipecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
