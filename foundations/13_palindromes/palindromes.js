const palindromes = function (str) {
  let palindrome = str
    .replaceAll(",", "")
    .replaceAll("!", "")
    .replaceAll(".", "")
    .split(" ")
    .join("")
    .toLowerCase();

  return palindrome === palindrome.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
