const removeFromArray = function(arr, ...args) {
    return arr.filter(num => !args.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
