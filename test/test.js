var scale = require('../scaley.js');
var should = require('should');

describe('scale()', function() {
    it('should scale numbers appropriately', function() {
        scale(0.5, 0, 1, -1, 1).should.equal(0);
        scale(0.5, -1, 1, -2, 2).should.equal(1);
    });
});
