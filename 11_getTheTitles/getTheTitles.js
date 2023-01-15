const getTheTitles = function(array) {
    let titleArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].hasOwnProperty('title')) {
            titleArray.push(array[i]['title'])
        }
        else
            continue;
    }
    return (titleArray);
};

// Do not edit below this line
module.exports = getTheTitles;
