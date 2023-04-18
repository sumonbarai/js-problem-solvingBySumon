/* problem-01: You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Return the merged string. */
// =====================start====================
console.time("Timer name");
const mergeFn = (word1, word2) => {
  // const s1 = word1.length;
  // const s2 = word2.length;
  let output = "";
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (i < word1.length) {
      output += word1.charAt(i);
    }
    if (i < word2.length) {
      output += word2.charAt(i);
    }
  }

  return output;
};
const word1 = "abc",
  word2 = "pqr";
console.log(mergeFn(word1, word2));
console.timeEnd("Timer name");
// ====================end===================

// =====================start====================

// ====================end===================
