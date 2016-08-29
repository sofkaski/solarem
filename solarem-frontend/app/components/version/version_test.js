'use strict';

describe('solaremFE.version module', function() {
  beforeEach(module('solaremFE.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
