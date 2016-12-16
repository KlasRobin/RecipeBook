'use strict';

describe('Directive: editrecipeform', function () {

  // load the directive's module
  beforeEach(module('yeomanTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<editrecipeform></editrecipeform>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editrecipeform directive');
  }));
});
