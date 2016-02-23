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

// describe('score()', function () {
//   it('should score roll from a user - get 1', function () {
//     var rnd = Math.random;
//     Math.random = function(){return 0;};
//     var rolls = game.rollDice(5); // rolls 1
//     expect(game.score(rolls)).to.equal(1);
//     Math.random = function(){return 0.5;}; // rolls 4
//     var rolls = game.rollDice(3);
//     expect(game.score(rolls)).to.equal(12);
//     Math.random = rnd;
//   });
// });


