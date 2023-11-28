/**
 * Repeats a given word a specified number of times.
 * @param {string} word - The word to be repeated.
 * @param {number} times - The number of times the word should be repeated.
 * @returns {string} - The resulting string that repeats the word parameter times number of times. If times is less than or equal to 0, it returns the string 'Error'.
 */
const repeatString = (word, times) => {
  if (times <= 0) {
    return 'Error';
  }

  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
