'use strict';

describe('Controller: DatenschutzCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageApp'));

  var DatenschutzCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatenschutzCtrl = $controller('DatenschutzCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
