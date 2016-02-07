'use strict';

describe('Controller: EjwCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageApp'));

  var EjwCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EjwCtrl = $controller('EjwCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
