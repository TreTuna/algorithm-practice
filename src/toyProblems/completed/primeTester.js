function primeSieve (start, end) {
  const results = [];

  for(let i = start; i <= end; i++){
    if(primeTester(i)){
      results.push(i)
    }
  }
  return results;
}

function primeTester (n) {
  if(n < 2){ return false; };
  for(let i = 2; i * i <= n; i++) {
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

// *** Solution Code


// Prime Tester
var primeTester = function(n) {
  // catch edge cases
  if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){
    return false;
  }

  // check if n is divisible...
  // by any number from 2 --> sqrt(n)
  for (var i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  // if no divisors found, n is prime
  return true;
};

// Prime Sieve

var primeSieve = function (start, end) {
  var current = 2;
  var primes = range(0, end);
  while (current < end) {
    // mark all multiples not prime
    for (var i = current*2; i <= end; i += current) {
      primes[i] = null;
    }
    // find the next current
    current += 1;
    while (!primes[current] && current <= end) {
      current++;
    }
  }
  return primes.slice(2).filter(function (val) {
    return val && val >= start;
  });
};

// Utility function to generate array from 0 --> end
var range = function (start, end) {
  var result = [];
  for (var i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};