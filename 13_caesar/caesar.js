const caesar = function(string, number) {
    const shift = number % 26;
    let newString = '';
    
    for (let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);
      if (code >= 97 && code <= 122) {
          newString += String.fromCharCode((code - 97 + shift + 26) % 26 + 97);
          } else if (code >= 65 && code <= 90) {
            newString += String.fromCharCode((code - 65 + shift + 26) % 26 + 65);
          } else {
            newString += string[i];
          }
        }
      
        return newString;
      
  };
// Do not edit below this line
module.exports = caesar;
