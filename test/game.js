var expect = require('chai').expect;
var game = require('../lib/game');

describe('rollDie()', function() {
    it('should roll a number between 1 and 6', function() {
        var n = game.rollDie();
        
        expect(n).to.be.within(1,6);
    });
});