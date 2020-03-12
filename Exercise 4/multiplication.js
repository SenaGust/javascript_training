function multiply(num1, num2) {
    try {
        return num1 * num2;
    } catch (error) {
        throw(error);
    }
};

module.exports = {multiply};