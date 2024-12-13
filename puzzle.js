const half = function (number) {
  return number / 2;
};

const squareRoot = function (array) {
  return array.map(Math.sqrt);
};

const getHalf = function (numbers) {
  return numbers.map(half);
};


const isOdd = function (number) {
  return (number & 1) === 1;
};

const getOdd = function (numbers) {
  return numbers.filter(isOdd);
};


const isLengthMoreThanFive = function (word) {
  return word.length > 5;
};

const getWordsMoreThanFive = function (words) {
  return words.filter(isLengthMoreThanFive);
};

const upperCase = function (word) {
  return word.toUpperCase();
};

const getUpperCase = function (words) {
  return words.map(upperCase);
};

const higherLengthWords = function (word1, word2) {
  return word1.length > word2.length ? word1 : word2;
};

const getLongestWord = function (words) {
  return words.reduce(higherLengthWords, "");
};

const add = function (firstEl, secondEl) {
  return firstEl + secondEl;
};

const conCat = function (words) {
  return words.reduce(add, "");
};

const multiply = function (firstEl, secondEl) {
  return firstEl * secondEl;
};

const product = function (numbers) {
  return numbers.reduce(multiply, 1);
};

const ifOdd = function (count, number) {
  return isOdd(number) ? count + 1 : count;
};

const getOddCount = function (numbers) {
  return numbers.reduce(ifOdd, 0);
};

console.log(squareRoot([4, 9, 16, 100]));
console.log(getHalf([4, 9, 16, 100]));
console.log(getOdd([1, 2, 3, 4, 5]));
console.log(getWordsMoreThanFive(['gaasg','Ankita','Asmaaaaa','shaluuuuu']));
console.log(getUpperCase(['Ankita', 'pavani', 'shalu', 'avani']));
console.log(getLongestWord(["this","amazing", "assignment", "rocks"]));
console.log(conCat(["ab","so", "lu", "te"]));
console.log(product([1, 2, 3, 4]));
console.log(getOddCount([1, 2, 3, 4, 5]));
