const reverseString = function(string) {
    let reversedString = '';
    let length = string.length;
    for (let i = length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return (reversedString);
};

// Do not edit below this line
module.exports = reverseString;
