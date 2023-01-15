const removeFromArray = function() {
    if (!Array.isArray(arguments[0]))
        return;
    let length = arguments.length
    for (let i = 1; i < length; i++) {
        while ((arguments[0].indexOf(arguments[i])) !== -1) {
            arguments[0].splice(arguments[0].indexOf(arguments[i]), 1)
        }
    }
    return (arguments[0])
};

// Do not edit below this line
module.exports = removeFromArray;
