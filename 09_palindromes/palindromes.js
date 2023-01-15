const palindromes = function (str) {
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return str === str.split('').reverse().join('');
};

// // Do not edit below this line
module.exports = palindromes;