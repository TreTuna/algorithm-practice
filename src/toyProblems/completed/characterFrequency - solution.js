const characterFrequency = (string) => {
  const charCount = {};
  const result = [];

  for(let char of string){
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for(var char in charCount){
    result.push([char, charCount[char]])
  }

  result.sort(function(a, b) {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else if(a[0] < b[0]) return -1;
    else if(a[0] > b[0]) return 1;
  });

  return result;
}



const characterFrequency = (string) => {
  // Create count object to count individual characters in the string
  const charCount = {
    chars: []
  };
  // Create results array;
  const result = [];

  // Iterate through string and add each character to charCount, incrementing count if already added
  for(let char of string){
    if(!charCount[char]){
    charCount[char] = 1;
  } else {
    charCount[char]++;
  }
}

  charCount.chars.sort();

  for(let char of charCount.chars){
    let tuple = [char, charCount[char]];
    if(result.length === 0){
      result.push(tuple);
    } else if (tuple[1] > result[0][1]) {
      result.unshift(tuple);
    } else {
      for(let i = result.length - 1; i >= 0; i--){
        if(tuple[1] <= result[i][1] ){
          result.splice(i + 1, 0, tuple);
          break;
        } else if(tuple[1] > result[i][1] && tuple[1] < result[i - 1][1]){
          result.splice(i, 0, tuple);
          break;
        }
      }
    }
  }
  return result;
}
