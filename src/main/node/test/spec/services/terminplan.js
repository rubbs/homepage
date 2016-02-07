'use strict';

describe('Service: Terminplan', function () {

  // load the service's module
  beforeEach(module('homepageApp'));

  // instantiate service
  var Terminplan;
  beforeEach(inject(function (_Terminplan_) {
    Terminplan = _Terminplan_;
  }));

  it('should do something', function () {
    expect(!!Terminplan).toBe(true);
  });

});
