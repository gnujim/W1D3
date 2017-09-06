function countLetters(str) {
  var allTheLetters = str.split(' ').join('');
  var uniqueChars = {};

  for (var idx in allTheLetters) {
    var propName = allTheLetters[idx];
    if (uniqueChars[propName]) {
      uniqueChars[propName] = uniqueChars[propName] + 1;
    } else {
      uniqueChars[propName] = 1;
    }
  }
  return uniqueChars;
}

console.log(countLetters('lighthouse in the house'));