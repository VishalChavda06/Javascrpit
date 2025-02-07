function hasVowel(str) {
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      return true; // Found a vowel
    }
  }
  return false; // No vowels found
}

console.log(hasVowel("red")); // true
console.log(hasVowel("xyz")); // false
