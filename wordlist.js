var genWordlist = function(n, letters) {
  var results = [];
  var words = require('an-array-of-english-words');
  var subWords = words.filter(word => word.includes('legal'));
  console.log(subWords);
  
  var helper = function(n, cache) {
    for (var i = 0; i < letters.length; i++) {
      cache += letters[i];
      if (cache.length === n) {
        if (subWords.includes(cache)) results.push(cache);
      } else {
        helper(n, cache);
      }
      cache = cache.slice(0, -1);
    }
  }
  helper(n, []);
  console.log(results);
  return results;
}

genWordlist(9, ['l', 'e', 'g', 'a', 'p', 'r']);