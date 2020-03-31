function firstCharIsDigitOrNumber(string) {
    const char = string.charAt(0);

    if(char > -1 && char < 10) 
        return true;

    const codASCII = char.toUpperCase().charCodeAt(0);
    if(codASCII > 64 && codASCII < 91) 
        return true;
     
    return false;
}

export default firstCharIsDigitOrNumber;