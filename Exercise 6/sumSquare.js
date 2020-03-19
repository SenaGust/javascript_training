function sumSquare(number1, number2) {
    if (isNaN(number1) || isNaN(number1)) {
        throw "TypeError";
    }
    return (Math.pow(number1, 1/2) + Math.pow(number2, 1/2));
}

export default sumSquare;