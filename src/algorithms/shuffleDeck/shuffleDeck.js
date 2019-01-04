function swap(a, b, array) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
}

export function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let cardToSwap = i + Math.floor(Math.random() * (deck.length - i));
    swap(i, cardToSwap, deck);
  }
  return deck;
}

// let orderedDeck = function() {
//   let suits = [ '♥', '♣', '♠', '♦' ];
//   let values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
//   let deck = [];
//
//   suits.forEach(function(suit) {
//     values.forEach(function(value) {
//       deck.push(value + suit);
//     });
//   });
//
//   return deck;
// };
