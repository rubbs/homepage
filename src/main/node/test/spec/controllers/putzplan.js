'use strict';

describe('Controller: PutzplanCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageApp'));

  var PutzplanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PutzplanCtrl = $controller('PutzplanCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
