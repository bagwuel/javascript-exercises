const sumAll = function(num1, num2) {
    for (let i = 0; i < arguments.length; i++) {
        if ((arguments[i] < 0) || typeof(arguments[i]) !== 'number') {
            return ('ERROR')
        }
    }
    let sum = 0;
    let min = Math.min(...arguments);
    let max = Math.max(...arguments);
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return (sum);
};

// Do not edit below this line
module.exports = sumAll;
