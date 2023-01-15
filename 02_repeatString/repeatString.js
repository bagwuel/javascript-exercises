const repeatString = function(string, num) {
    let stringRepeat = '';
    if (num < 0)
        return ('ERROR')
    for (let i = 0; i < num; i++) {
        stringRepeat += string;
    }
    return (stringRepeat);
};

// Do not edit below this line
module.exports = repeatString;
