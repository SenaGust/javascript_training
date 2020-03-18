const multiplication = require('../Exercise 4/multiplication');

function makeString(string, number1, number2) {
    try {
        if(number1 % 2 === 0 && number2 % 2 === 0) {
            return (string + sumSquare(number1, number2));
        }
    
        return (string +  multiplication.multiply(number1, number2));
    } catch (error) {
        return 'Please, try again because the second and/or third parameters must be numbers.';
    }
}

function sumSquare(number1, number2) {
    if (isNaN(number1) || isNaN(number1)) {
        throw "TypeError";
    }
    return (Math.pow(number1, 1/2) + Math.pow(number2, 1/2));
}

module.exports = {makeString, sumSquare};