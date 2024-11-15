const removeFromArray = function (array, ...values) {
  result = [];
  for (const element of array) {
    if (!values.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
