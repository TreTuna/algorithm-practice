

describe("LinkedList", function() {
  it('should exist', function(){
    expect(LinkedList).toBeDefined();
  });

  it('should be a function', function(){
    expect(typeof LinkedList).toBe("function");
  });

  it("should be implemented using the pseudoclassical pattern", function(){
    expect(typeof LinkedList.prototype.addToTail).toBe("function");
    expect(typeof LinkedList.prototype.removeHead).toBe("function");
    expect(typeof LinkedList.prototype.contains).toBe("function");
  });

  it("should accept an initial value", function(){
    let list = new LinkedList(1);
    expect(list.tail.value).toBe(1);
    expect(list.head.value).toBe(1);
    list.addToTail(2);
    expect(list.head.next.value).toBe(2);
  })

  it("should designate a new tail when new nodes are added", function(){
    let list = new LinkedList();
    list.addToTail(4);
    expect(list.tail.value).toBe(4);
    list.addToTail(5);
    expect(list.tail.value).toBe(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    let list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    expect(list.head.value).toBe(4);
    list.removeHead();
    expect(list.head.value).toBe(5);
  });

  it("should remove the head and tail from the list when removeHead is called and there is only one element present", function(){
    let list = new LinkedList(4);
    expect(list.head.value).toBe(4);
    expect(list.tail.value).toBe(4);
    list.removeHead();
    expect(list.head).toBeFalsy();
    expect(list.tail).toBeFalsy();
  });

  it("should contain a value that was added", function(){
    let list = new LinkedList(4);
    list.addToTail(5);
    expect(list.contains(4)).toBe(true);
    expect(list.contains(5)).toBe(true);
    expect(list.contains(6)).toBe(false);
  });

  it("should not contain a value that was removed", function(){
    let list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.removeHead();
    expect(list.contains(4)).toBe(false);
  });

});