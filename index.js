/**
 * Randomly scrambles an input string.
 *
 * @param {String} string
 * @return {String}
 */

exports.stringScrambler = (str) => {
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

let s = "ABC DE F";

console.log(this.stringScrambler(s));
