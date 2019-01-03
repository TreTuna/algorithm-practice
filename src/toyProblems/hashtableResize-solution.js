// what kind of instatiation is this?
// http://www.ryanatkinson.io/javascript-instantiation-patterns/

var makeHashTable = function() {
  // ... insert, retrieve, and remove methods are provided in prompt
  // there are some interesting takeaways there so please make sure you understand what's going on
  function resize(newSize) {
    var copy = storage;
    storageLimit = newSize;
    storage = [];
    size = 0;

    /* mdn.io/forEach:
     * > It is not invoked for indexes which have been
     *   deleted or which have been initialized to
     *   undefined                                  */
    copy.forEach(function(pairs) {
      pairs.forEach(function(pair){
        result.insert(pair[0], pair[1]);
      });
    });
  }

  return result;
};