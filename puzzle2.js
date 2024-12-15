const isOdd = function (number) {
  return (number & 1) === 1;
};

const isNegative = function (number) {
  return number < 0;
};

const isGreaterThan100 = function (number) {
  return number > 100;
};

const isCharMoreThan3 = function (string) {
  return string.length < 3;
};

const isAtleast = function (func, array) {
  for (let element of array) {
    if (func(element)) {
      return true;
    }
  }

  return false;
};

const areAll = function (func, array) {
  for (let element of array) {
    if (func(element)) {
      return false;
    }
  }

  return true;
};

const isAtLeastOneOdd = function (array) {
  return isAtleast(isOdd, array);
};

const isAllPositive = function (array) {
  return areAll(isNegative, array);
};

const isAtLeastOneGreater100 = function (array) {
  return isAtleast(isGreaterThan100, array);
};

const isAllCharMoreThan3 = function (array) {
  return areAll(isCharMoreThan3, array);
};

console.log(isAtLeastOneOdd([1, 2, 4]));
console.log(isAllPositive([1, 2, 3]));
console.log(isAtLeastOneGreater100([1, 150]));
console.log(isAllCharMoreThan3(["this", "that"]));