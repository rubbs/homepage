'use strict';

describe('Controller: WeihnachtsmarktCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageApp'));

  var WeihnachtsmarktCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeihnachtsmarktCtrl = $controller('WeihnachtsmarktCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
