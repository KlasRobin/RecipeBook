'use strict';

describe('Controller: Login7Ctrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTestApp'));

  var Login7Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Login7Ctrl = $controller('Login7Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Login7Ctrl.awesomeThings.length).toBe(3);
  });
});
