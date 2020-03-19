import multiply from '../Exercise 4/multiplication';
import sumSquare from './sumSquare';

function makeString(string, number1, number2) {
    try {
        if(number1 % 2 === 0 && number2 % 2 === 0) {
            return (string + sumSquare(number1, number2));
        }
    
        return (string +  multiply(number1, number2));
    } catch (error) {
        return 'Please, try again because the second and/or third parameters must be numbers.';
    }
}

export default makeString;