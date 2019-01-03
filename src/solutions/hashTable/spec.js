

describe('makeHashTable', function(){
  it('should exist', function(){
    expect(makeHashTable).toBeDefined();
  });
  it('should be a function', function(){
    expect(typeof makeHashTable).toBe('function');
  });
  it('should return a hash table', function(){
    var hashTable = makeHashTable();
    expect(hashTable).toBeDefined();
    expect(hashTable).be.an.Object;
  });
  it('should return different instances of hash tables each time', function(){
    var hashTable1 = makeHashTable();
    expect(hashTable1).toBeDefined();

    var hashTable2 = makeHashTable();
    expect(hashTable2).toBeDefined();
    expect(hashTable1).not.toBe(hashTable2);
    // `makehashTable()` should create a new hash table object instance
    // everytime but it's not!
  });
});

describe('hashTable', function(){
  describe('#insert', function(){
    it('should exist as a method of hashtable instances', function(){
      var hashTable = makeHashTable();
      expect(hashTable.insert).toBeDefined();
    });
    it('should take exactly two arguments. a key and a value', function(){
      var hashTable = makeHashTable();
      expect(hashTable.insert.length).toBe(2);
      /**
       a hashtable gets its awesomeness from associating data. it wouldn't be
       very useful if you just gave it data without any association.
       ie, bad hash table:
       you: hey hashtable, can you please remember "sarah" (key)?
       hashtable: um... okay?
       ... sometime later...
       you: hey hastable, when's "sarah"'s (key) birthday?
       hashtable: "sarah"
       you: Um.. this is awkward...
       ie, good hashtable:
       you: hey hashtable, please remember that "sarah"s (key) birthday is
       "January 23rd" (value)
       hashtable: okay, friend. you got it!
       ... sometime later ...
       you: hey hashtable, when's "sarah"'s (key) birthday?
       hashtable: "January 23rd"
       you: thanks hashtable, you're awesome!
       hashtable: i know
       */
    });
    it('should not throw an error with valid input', function(){
      expect(function(){
        var hashTable = makeHashTable();
        hashTable.insert('keanu reeves best movie', 'The Matrix');
        // calling insert should not throw an error
      }).not.toThrowError();
    });
    it('should allow keys to be reinserted with new values', function(){
      var hashTable = makeHashTable();
      expect(function(){
        hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
        hashTable.insert('keanu reeves best movie', 'The Matrix');
      }).not.toThrowError();
    });
  });

  describe('#retrieve', function(){
    it('should be a method of hashTable instances', function(){
      var hashTable = makeHashTable();
      expect(hashTable.retrieve).toBeDefined();
    })
    it('should be a function', function(){
      var hashTable = makeHashTable();
      expect(typeof hashTable.retrieve).toBe('function');
    });
    it('should take exactly one argument', function(){
      var hashTable = makeHashTable();
      // the retrieve function should only take a single `key` argument
      expect(hashTable.retrieve.length).toBe(1);
    })
    it('should return values previously inserted', function(){
      var hashTable = makeHashTable();
      hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
      var value = hashTable.retrieve('William Shatner\'s most well known role');
      expect(value).toBeDefined();
      expect(value).toBe('Captain Kirk');
    });
    it('should return undefined for unknown keys', function(){
      var hashTable = makeHashTable();
      expect(hashTable.retrieve('echo?')).toBeFalsy();
    });
  });

  describe('#insert', function(){
    it('should allow values to be updated', function(){
      var hashTable = makeHashTable();
      hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
      hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
      var value = hashTable.retrieve('Tarantino\'s best movie');
      expect(value).toBeDefined();
      expect(value).toBe('Pulp Fiction');
    });
  });

  describe('#remove', function(){
    it('should exist as a method of the hashTable instance', function(){
      var hashTable = makeHashTable();
      expect(hashTable.remove).toBeDefined();
    });
    it('should be a function', function(){
      var hashTable = makeHashTable();
      expect(typeof hashTable.remove).toBe('function');
    });
    it('should take exactly one argument', function(){
      var hashTable = makeHashTable();
      // the remove function should only take a single `key` argument
      expect(hashTable.remove.length).toBe(1);
    });
    it('should allow values to be removed', function(){
      var hashTable = makeHashTable();
      hashTable.insert('Spielberg\'s best movie', 'Jaws');
      hashTable.remove('Spielberg\'s best movie');
      var value = hashTable.retrieve('Spielberg\'s best movie');
      expect(value).toBeFalsy();
    });
  });

  describe('#insert', function(){
    it('should handle collisions', function(){
      var hashTable = makeHashTable();
      var n = 1010;
      for(var i = 0; i < n; i++){
        hashTable.insert('userid:' + i, 'Jamie Hyneman #' + i);
      }
      for (var i = 0; i < n; i++) {
        expect(hashTable.retrieve('userid:' + i)).toBe('Jamie Hyneman #' + i);
      }
    });
  });
});