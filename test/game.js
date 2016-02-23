var expect = require('chai').expect;
var game = require('../lib/game');


describe('rollDie()', function() {
    it('should roll a number between 1 and 6', function() {
        var n = game.rollDie();
        
        expect(n).to.be.within(1,6);
    });
});

describe('rollDice(rolls)', function() {
    it('should roll passed in number of dice', function() {
        var array = game.rollDice(4);
        
        expect(array).to.have.length(4);
    });
});

describe('score(rolls)', function() {
    it('should calculate total score on turn', function() {
        var total = game.score([4,3,4,2,5]);
        
       expect(total).to.equal(18);
    });
});

describe('score(rolls)', function() {
    it('should score 1 if 1 is rolled in rolls', function() {
        var total = game.score([2,3,4,1]);
        
        expect(total).to.equal(1);
    });
});


