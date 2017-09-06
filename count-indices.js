function countIndices(str) {
  var charsAndIndices = {};

  for (var i = 0; i < str.length; i++) {
    if (/\w/.test(str[i])) {
      var propName = str[i];
      if (charsAndIndices[propName]) {
        charsAndIndices[propName].push(i);
      } else {
        charsAndIndices[propName] = [i];
      }
    }
  }
  return charsAndIndices;
}
console.log(countIndices('lighthouse in the house'));