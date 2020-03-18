const multiplication = require('../Exercise 4/multiplication');

function makeString(string, number1, number2) {
    if(number1 % 2 === 0 && number2 % 2 === 0) {
        return (string + (Math.pow(number1, 1/2) + Math.pow(number2, 1/2)));
    }

    return (string +  multiplication.multiply(number1, number2));
}

module.exports = {makeString};