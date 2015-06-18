// Memoize takes an expensive function 
// and caches the results
// for long running functions

memoize = function(callback) {
  var cache = {};
  return function() {
    var argumentsArray = JSON.stringify(arguments);
    if ( !(argumentsArray in cache) ) {
      cache[argumentsArray] = callback.apply(null, arguments);
    };
    return cache[argumentsArray];
  };
};

module.exports = memoize;