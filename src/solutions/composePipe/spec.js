'use strict';



describe('composePipe', function() {

  describe('Step 1: Compose', function() {

    it('should exist', function() {
      expect(compose).toBeDefined();
    });
    it('should be a function', function() {
      expect(typeof compose).toBe('function');
    });
    it('should return a function', function() {
      var result = compose(function() {return 'Hi!';});
      expect(result).toBeDefined();
      expect(typeof result).toBe('function');
    });
    it('should be able to compose 2 functions', function() {
      var greet = function(name){return 'hi: ' + name;};
      var exclaim = function(statement){return statement.toUpperCase() + '!'};
      var welcome = compose(greet, exclaim);
      expect(typeof welcome).toBe('function');
      expect(welcome('phillip')).toBe('hi: PHILLIP!');
      expect(welcome('kia')).toBe('hi: KIA!');
    });
    it('should be able to compose multiple functions', function() {
      var first = function(array){return array[0];};
      var shift = function(array){return array.slice(1);};
      var fifth = compose(first, shift, shift,shift, shift);
      expect(typeof fifth).toBe('function');
      expect(fifth([1,2,3,4,5,6,7,8,9])).toBe(5);
    });

    it('should handle multiple composes', function() {
      var first = function(array){return array[0];};
      var shift = function(array){return array.slice(1);};
      var fifth = compose(first, shift, shift, compose(shift, shift));
      expect(typeof fifth).toBe('function');
      expect(fifth([1,2,3,4,5,6,7,8,9])).toBe(5);
    });
  });


  describe('Step 2: Pipe', function() {

    it('should exist', function() {
      expect(pipe).toBeDefined();
    });
    it('should be a function', function() {
      expect(typeof pipe).toBe('function');
    });
    it('should return a function', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      expect(typeof pipe(add2, multiplyBy3)).toBe('function');
    });
    it('should pass the input through a function', function() {
      function add2(value){return value + 2;}
      expect(pipe(add2)(21)).toBe(23);
    });
    it('should pass the input through 2 functions', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (expect(pipe(add2, multiplyBy3)(5)).toBe(21));
    });
    it('should pass the input through multiple functions', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (expect(pipe(add2, multiplyBy3, add2, multiplyBy3)(7)).toBe(87));
    });
    it('should be able to handle multiple pipes', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (expect(pipe(pipe(add2, multiplyBy3), multiplyBy3)(7)).toBe(81));
    });

  });

});