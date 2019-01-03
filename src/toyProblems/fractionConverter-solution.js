function fractionConverter (number) {
  // Write your code here, and
  // return your final answer.
}



// **** Solution Code

// this is our helper function to calculate greatest common denominator
// https://en.wikipedia.org/wiki/Euclidean_algorithm
// side note - it might have been possible to not use this in the challenge app
// and not time out but i always timed out when using a for loop
// it would still definitely be less efficient
// and there will be other times where loop will definitely not work (i.e. super large numbers with no gcd)
var gcdCalc = function (a,b) {
  if (b === 0) {
    return a
  } else {
    return gcdCalc(b, a % b)
  }
}

var toFraction = function(num){
  var denom = 1;
  if(num < 0) {
    return ‘-’ + toFraction(-num)
  } else {
    while (num % 1 !== 0) {
      // we need to do this to avoid bad decimal math
      // it's not really javascripts fault
      // any language using IEEE 754 standard will have to deal with this
      // https://en.wikipedia.org/wiki/IEEE_floating_point
      num = parseFloat(num*10).toPrecision(12);
      denom = denom*10;
    }
  }

  /*
   // loop approach
   var gcd = 1;
   for(var i = num; i > 0; i--){
   if(num%i === 0 && denom%i === 0){
   gcd = i;
   break;
   }
   }
   */

  // omit for loop approach - but why would you?
  var gcd = gcdCalc(num, denom)

  return num/gcd + ‘/’ + denom/gcd;
};