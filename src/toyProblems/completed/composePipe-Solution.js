const compose = function(){
  const args = Array.from(arguments);

  return (val) => {
    return args.reduceRight((memo, fn) => {
      return fn(memo);
    }, val);
  }
};





const pipe = function(){
  const args = Array.from(arguments);

  return (val) => {
    return args.reduce((memo, fn) => {
      return fn(memo);
    }, val);
  };
};






























// **** Solution Code

var compose = function(){
  // what are other ways to get args?
  var args = Array.prototype.slice.call(arguments);

  return function(val){
    return args.reduceRight(function(memo, fn){
      return fn(memo);
    }, val);
  };
};

// pipe is just compose in the other direction
var pipe = function(){
  var args = Array.prototype.slice.call(arguments);

  return function(val){
    return args.reduce(function(memo, fn){
      return fn(memo);
    }, val);
  };
};

// maybe the resulting higher order function needs to support multiple arguments
var pipe = function(){
  var args = Array.prototype.slice.call(arguments);

  return function(){
    return args.splice(1).reduce(function(memo, fn){
      return fn(memo);
    }, args[0].apply(null, arguments));
  };
};

// we could do this in es6
var pipe = function(first, ...rest){

  return function(...innerArgs){
    return rest.reduce(function(memo, fn){
      return fn(memo);
    }, first(...innerArgs));
  };

};
// but can you just reverse it for compose? will that work? (hint: why not?)

// using fat arrow
var pipe = (first, ...rest) => (...innerArgs) => rest.reduce((memo, fn) => fn(memo), first(...innerArgs))