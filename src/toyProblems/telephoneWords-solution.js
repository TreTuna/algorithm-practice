telephoneWords = digitString => {
  const results = [];

  const makeAWord = (word, numbers) => {
    if(numbers.length === 0) {
      results.push(word);
      return;
    };

    let workingNum = numbers[0];
    let otherNums = numbers.slice(1);
    var lettersForDigit = telephoneLetters[workingNum];

    for(let i = 0; i < lettersForDigit.length; i++) {
      makeAWord(word + lettersForDigit[i], otherNums);
    };
  };

  makeAWord('', digitString);
  return results;
};

const telephoneLetters = {
  0: '0',
  1: '1',
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
};