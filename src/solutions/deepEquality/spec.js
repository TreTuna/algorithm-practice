

describe('deepEquals()', function(){

  it('should exist', function(){
    expect(deepEquals).toBeDefined();
  });
  it('should be a function', function(){
    expect(typeof deepEquals).toBe('function');
  });
  it('should take at least two arguments', function(){
    expect(deepEquals.length).toBeGreaterThan(1);
  });
  it('should return a result', function(){
    var result = deepEquals({}, {});
    expect(result).toBeDefined();
  });
  it('should return a boolean', function(){
    expect(deepEquals({}, {})).be.a.Boolean;
  });
  it('should return true for two empty objects', function(){
    expect(deepEquals({}, {})).toBe(true);
  });
  it('distinguishes between objects and arrays', function() {
    var a = { foo: [2, { bar: {}}]}
    var b = { foo: [2, { bar: []}]}
    expect(deepEquals(a,b)).toBe(false);
  });
  it('should use deep equality', function(){
    var a = { foo: 1 };
    var b = { foo: '1' };
    expect(deepEquals(a,b)).toBe(false);
  });
  it('should return true for two objects with the same keys and values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar' };
    expect(deepEquals(a, b)).toBe(true);
  });
  it('should return false for two objects with the same keys but different values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'pow' };
    expect(deepEquals(a, b)).toBe(false);
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar', biz: 'baz' };
    expect(deepEquals(a, b)).toBe(false);
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar', biz: 'baz' };
    var b = { foo:'bar' };
    expect(deepEquals(a, b)).toBe(false);
  });
  it('should return true for similar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c: 3 } };
    expect(deepEquals(a,b)).toBe(true);
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c:'potato' } };
    expect(deepEquals(a,b)).toBe(false);
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 'potato'} };
    var b = { foo: 1, b: { c: 3 } };
    expect(deepEquals(a,b)).toBe(false);
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    expect(deepEquals(a,b)).toBe(true);
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    expect(deepEquals(a,b)).toBe(true);
  });
});