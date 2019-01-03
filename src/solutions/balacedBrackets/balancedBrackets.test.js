import { isBalanced } from "./src";

describe("Balanced Brackets", function() {
  it('Should return true for "(x + y) - (4)"', function() {
    var result = isBalanced("(x + y) - (4)");
    expect(result).toBe(true);
  });
  it('Should return true for "(((10 ) ()) ((?)(:)))"', function() {
    var result = isBalanced("(((10 ) ()) ((?)(:)))");
    expect(result).toBe(true);
  });
  it('Should return true for "[{()}]"', function() {
    var result = isBalanced("[{()}]");
    expect(result).toBe(true);
  });
  it('Should return true for "{}"', function() {
    var result = isBalanced("{}");
    expect(result).toBe(true);
  });
  it('Should return true for "[{}]"', function() {
    var result = isBalanced("[{}]");
    expect(result).toBe(true);
  });
  it('Should return true for "[[[{{{((()))}}}]]]"', function() {
    var result = isBalanced("[[[{{{((()))}}}]]]");
    expect(result).toBe(true);
  });
  it('Should return true for "(50)("', function() {
    var result = isBalanced("(50)(");
    expect(result).toBe(false);
  });
  it('Should return true for "()(()()()())((()(()()))"', function() {
    var result = isBalanced("()(()()()())((()(()()))");
    expect(result).toBe(false);
  });
  it('Should return true for ")("', function() {
    var result = isBalanced(")(");
    expect(result).toBe(false);
  });
  it('Should return true for ")))()((("', function() {
    var result = isBalanced(")))()(((");
    expect(result).toBe(false);
  });
  it('Should return true for "{"', function() {
    var result = isBalanced("{");
    expect(result).toBe(false);
  });
  it('Should return true for "}"', function() {
    var result = isBalanced("}");
    expect(result).toBe(false);
  });
  it('Should return true for "[]]"', function() {
    var result = isBalanced("[]]");
    expect(result).toBe(false);
  });
  it('Should return true for "[]}{()"', function() {
    var result = isBalanced("[]}{()");
    expect(result).toBe(false);
  });
  it('Should return true for "({)}"', function() {
    var result = isBalanced("({)}");
    expect(result).toBe(false);
  });
  it('Should return true for "[{]}"', function() {
    var result = isBalanced("[{]}");
    expect(result).toBe(false);
  });
});
