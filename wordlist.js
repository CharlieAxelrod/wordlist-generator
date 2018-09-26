var genWordlist = function(n, letters) {
  var results = [];
  var checkWord = require('check-word');
  var words = checkWord('en');
  
  var helper = function(n, cache) {
    for (var i = 0; i < letters.length; i++) {
      cache += letters[i];
      if (cache.length === n) {
        if (words.check(cache)) {
          console.log(cache); 
          results.push(cache);
        }
      } else {
        helper(n, cache);
      }
      cache = cache.slice(0, -1);
    }
  }
  helper(n, []);
  return results;
};
