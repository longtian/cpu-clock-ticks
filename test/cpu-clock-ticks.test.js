var cct = require('../');
var assert = require('assert');

describe('The cpu-clock-ticks module', function () {
    it('should work as expected', function () {
        assert(cct() > 0, 'tick should be more then 0')
    });
});