function multiply(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2)) {
            throw "Parameter is not a number!";
          }
        return num1 * num2;
    } catch (error) {
        return error.message;
    }
};

module.exports = {multiply};