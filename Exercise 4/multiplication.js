function multiply(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw "TypeError";
    }
    return num1 * num2;
};

export default multiply;