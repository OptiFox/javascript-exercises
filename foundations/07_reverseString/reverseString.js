const reverseString = function (strings) {
    // let splitStr = strings.split('');
    // let reverseStr = splitStr.reverse();
    // let joinStr = reverseStr.join('');

    // return joinStr;

    // Made it simpler
    return strings.split('')
        .reverse()
        .join('');
};

// Do not edit below this line
module.exports = reverseString;
