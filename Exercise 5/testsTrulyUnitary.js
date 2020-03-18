const multiplication = require('../Exercise 4/multiplication');

function makeString(string, number1, number2) {
    try {
        return (string +  multiplication.multiply(number1, number2));
    } catch (error) {
        return 'Please, try again because the second and/or third parameters must be numbers.';
    }   
}

module.exports = {makeString};