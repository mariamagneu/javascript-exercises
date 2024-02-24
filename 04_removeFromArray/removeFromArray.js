const removeFromArray = function(array, ...nums) {
 const newArray = [];
 array.forEach(function(item) {
    if (!nums.includes(item)) {
        newArray.push(item);
    }
 })
 return newArray;
};



// Do not edit below this line
module.exports = removeFromArray;
