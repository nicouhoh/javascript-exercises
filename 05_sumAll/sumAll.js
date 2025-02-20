const sumAll = function (low, high) {
  if (!Number.isInteger(low) || !Number.isInteger(high)) return "ERROR";
  if (low < 0 || high < 0) return "ERROR";
  let result = 0;
  for (let i = Math.min(low, high); i <= Math.max(low, high); i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
