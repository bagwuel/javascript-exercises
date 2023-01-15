const leapYears = function(year) {
    if (isNaN(year)) 
        return ('ERROR');
    let myYear = Number(year);
    if (myYear % 4 !== 0) {
        return (false)
    }
    else {
        if ((myYear % 100 === 0) && (myYear % 400 !== 0))
            return (false);
        return (true)
    }
};

// Do not edit below this line
module.exports = leapYears;
