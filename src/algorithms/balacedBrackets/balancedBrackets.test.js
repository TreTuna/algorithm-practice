import { isBalanced } from "./balancedBrackets";

describe("Balanced Brackets", function() {
  it('Should return true for "(x + y) - (4)"', function() {
    let result = isBalanced("(x + y) - (4)");
    expect(result).toBe(true);
  });
  it('Should return true for "(((10 ) ()) ((?)(:)))"', function() {
    let result = isBalanced("(((10 ) ()) ((?)(:)))");
    expect(result).toBe(true);
  });
  it('Should return true for "[{()}]"', function() {
    let result = isBalanced("[{()}]");
    expect(result).toBe(true);
  });
  it('Should return true for "{}"', function() {
    let result = isBalanced("{}");
    expect(result).toBe(true);
  });
  it('Should return true for "[{}]"', function() {
    let result = isBalanced("[{}]");
    expect(result).toBe(true);
  });
  it('Should return true for "[[[{{{((()))}}}]]]"', function() {
    let result = isBalanced("[[[{{{((()))}}}]]]");
    expect(result).toBe(true);
  });
  it('Should return true for "(50)("', function() {
    let result = isBalanced("(50)(");
    expect(result).toBe(false);
  });
  it('Should return true for "()(()()()())((()(()()))"', function() {
    let result = isBalanced("()(()()()())((()(()()))");
    expect(result).toBe(false);
  });
  it('Should return true for ")("', function() {
    let result = isBalanced(")(");
    expect(result).toBe(false);
  });
  it('Should return true for ")))()((("', function() {
    let result = isBalanced(")))()(((");
    expect(result).toBe(false);
  });
  it('Should return true for "{"', function() {
    let result = isBalanced("{");
    expect(result).toBe(false);
  });
  it('Should return true for "}"', function() {
    let result = isBalanced("}");
    expect(result).toBe(false);
  });
  it('Should return true for "[]]"', function() {
    let result = isBalanced("[]]");
    expect(result).toBe(false);
  });
  it('Should return true for "[]}{()"', function() {
    let result = isBalanced("[]}{()");
    expect(result).toBe(false);
  });
  it('Should return true for "({)}"', function() {
    let result = isBalanced("({)}");
    expect(result).toBe(false);
  });
  it('Should return true for "[{]}"', function() {
    let result = isBalanced("[{]}");
    expect(result).toBe(false);
  });
});
