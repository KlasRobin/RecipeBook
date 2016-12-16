'use strict';

describe('Controller: SinglerecipeCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTestApp'));

  var SinglerecipeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinglerecipeCtrl = $controller('SinglerecipeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SinglerecipeCtrl.awesomeThings.length).toBe(3);
  });
});
