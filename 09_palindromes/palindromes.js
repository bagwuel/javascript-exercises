const palindromes = function (str) {
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

// const palindromes = function (string) {
//     string = string.toLowerCase();
//     let strArray = string.split('')
//     let newStrArray = [];
//     let reversedString = "";

//     for (let i = 0; i < strArray.length; i++) {
//         if ((((string.charCodeAt(string[i]) < 97)
//         || (string.charCodeAt(string[i]) > 122)) 
//         && (string.charCodeAt(string[i]) !== 32))) {
//            newStrArray = string.slice(strArray[i], strArray[i + 1]);
//         }
//     }
//     string = newStrArray.join('');

//     for (let i = string.length - 1;  i >= 0; i--) {
//         reversedString += string[i];
//     }
//     if (string === reversedString) {
//         return (true);
//     }
//     else {
//         return (false)
//     }

// };

// // Do not edit below this line
module.exports = palindromes;