/**
 * Returns a randomly scrambled input string.
 *
 * @param {String} string
 * @return {String}
 */

const scramble = (str) => {
  const strArr = str.split("");
  const len = strArr.length;
  for (var i = 0; i < len - 1; i++) {
    const j = Math.round(Math.random() * (len - 1));
    const hold = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = hold;
  }
  return strArr.join("");
};

module.exports = {
  scramble,
};
