import multiply from '../Exercise 4/multiplication'

function makeString(string, number1, number2) {
    try {
        return (string + multiply(number1, number2));
    } catch (error) {
        return 'Please, try again because the second and/or third parameters must be numbers.';
    }   
}
export default makeString;