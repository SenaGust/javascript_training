const multiplication = require('../Exercise 4/multiplication');

function makeString(string, number1, number2) {
    return (string +  multiplication.multiply(number1, number2));
}

module.exports = {makeString};