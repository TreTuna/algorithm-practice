function numberToEnglish (number) {
  if (number < 20) {
    return numbersToWords[number];
  };

  // Create result string
  let result = '';
  let numString = number.toString();
  let size = numString.length;

  // loop trough the number
  for (var i = 0; i <= size - 1; i++){
    let place = size - i;
    let num = parseInt(numString[i]);
    let numWord = numbersToWords[num];
    // compare to the numberToWords object for value. Concatenate to result string
    if (i !== 0) {
      result.concat(' ');
    }

    result = result.concat(numWord);

    // use index to compare to the numbersToPlace object for place words. If if right place, concatenate to the result string
    if(numPlace[place]){
      result.concat(` numbersToPlace`);
    }
  }

  return result;
};



// **** solution code

function numberToEnglish (num) {
  var n = num, output, numInPlace, numLeft, place, restOfString;
  if (numbersToWords[n]) {
    // numbers less than 20 or divisible by 10
    output = numbersToWords[n];
  } else if (n < 100) {
    // tens and a single digit, hyphenated
    numInPlace = Math.floor(n / 10);
    numLeft = n % 10;
    output = numbersToWords[numInPlace * 10] +'-'+ numberToEnglish(numLeft);
  } else {
    // combo of number and a place name
    if (n < 1000) {
      // the hundreds place is special
      place = 100;
    } else {
      // or multiple of 1000
      place = 1000;
      while (place * 1000 <= n) {
        place *= 1000;
      }
    }
    numInPlace = Math.floor(n / place);
    numLeft = n % place;
    // assemble this 1000s place
    output = numberToEnglish(numInPlace) +' '+ numbersToPlace[place];
    // assemble the rest of the number
    restOfString = numberToEnglish(numLeft);
    if (restOfString !== 'zero') {
      output += ' ' + restOfString;
    }
  }
  return output
}