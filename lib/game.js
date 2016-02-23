var rollDie = function() {
    return Math.floor(Math.random() * 6) + 1;    
}

var rollDice = function(number) {
    var dice = [];
    
    for (var num = 0; num < number; num++) {
        var roll = rollDie();
        dice.push(roll);
    }
    
    return dice;   
}

var score = function(rolls) {
    if (rolls.indexOf(1) !== -1) {
        return 1;
    } else {
        return rolls.reduce(function(prev, curr) {
            return prev + curr; 
        });   
    }
}


 
module.exports.rollDie = rollDie;
module.exports.rollDice = rollDice;
module.exports.score = score;