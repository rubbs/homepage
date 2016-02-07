'use strict';

describe('Service: balatonSp', function () {

  // load the service's module
  beforeEach(module('homepageApp'));

  // instantiate service
  var balatonSp;
  beforeEach(inject(function (_balatonSp_) {
    balatonSp = _balatonSp_;
  }));

  it('should do something', function () {
    expect(!!balatonSp).toBe(true);
  });

});
