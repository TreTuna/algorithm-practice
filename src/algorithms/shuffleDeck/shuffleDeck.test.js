import { shuffleDeck } from "./shuffleDeck";

let orderedDeck = function() {
  let suits = ["♥", "♣", "♠", "♦"];
  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

describe("shuffleDeck", function() {
  it("should exist", function() {
    expect(shuffleDeck).toBeDefined();
  });

  it("should be a function", function() {
    expect(typeof shuffleDeck).toBe("function");
  });

  it("should return an array", function() {
    let result = shuffleDeck(orderedDeck());
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
  });

  it("should return an array with every card in the deck", function() {
    let input = orderedDeck();
    let control = orderedDeck();
    let result = shuffleDeck(input);
    // check that every expected card is in the result deck
    for (let i = 0; i < control.length; i++) {
      expect(result).toEqual(expect.arrayContaining([control[i]]));
    }
    // check that no unexpected cards are in the result deck
    for (let i = 0; i < result.length; i++) {
      expect(control).toEqual(expect.arrayContaining([result[i]]));
    }
  });

  it("should not return the deck in input order", function() {
    let input = orderedDeck();
    let control = orderedDeck();
    let result = shuffleDeck(input);
    // check that all cards are not present in the same order
    expect(result).not.toEqual(control);
    // It is theoretically conceivable, but statistically impossible that this could happen randomly.
    // (P = 1 in 52!)
  });

  it("should not return the deck in the same order twice", function() {
    let input1 = orderedDeck();
    let input2 = orderedDeck();
    let result1 = shuffleDeck(input1);
    let result2 = shuffleDeck(input2);

    // check that all cards are not present in the same order
    expect(result1).not.toEqual(result2);
    // It is theoretically conceivable, but statistically impossible that this could happen randomly.
    // (P = 1 in 52!)
  });

  it("should not have any bias from a uniform distribution", function() {
    // This one is tricky. We're going to verify that your algorithm returns a deck which "looks random".
    let deck = orderedDeck();
    // Keep a table of how often each card appears in each deck position...
    let cardPositionCounts = {};
    for (let i = 0; i < deck.length; i++) {
      let cardPosition = (cardPositionCounts[deck[i]] = {});
      for (let j = 0; j < deck.length; j++) {
        cardPosition[j] = 0;
      }
    }
    // ...over the course of five hundred shuffles
    let iterations = 52 * 10;
    for (let i = 0; i < iterations; i++) {
      deck = orderedDeck();
      let randomDeck = shuffleDeck(deck);
      for (let j = 0; j < randomDeck.length; j++) {
        cardPositionCounts[randomDeck[j]][j] += 1;
      }
    }
    // The result should not betray any obvious statistical bias.
    deck = orderedDeck();
    // The expected number of occurrences for a particular card in a particular index is
    // iterations/52 = 10
    let expected = 10,
      chi2 = 0;
    for (let i = 0; i < deck.length; i++) {
      let cardPosition = cardPositionCounts[deck[i]];
      for (let j = 0; j < deck.length; j++) {
        // calculate chi-squared test
        chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
      }
    }
    // quick and dirty statistical test:
    // if your shuffles are uniformly distributed, chi-squared should be roughly 52^2
    let target = 52 * 52;
    let margin = 52 * 10;
    expect(chi2).toBeGreaterThanOrEqual(target - margin);
    expect(chi2).toBeLessThanOrEqual(target + margin);
  });

  it("EXTRA CREDIT (jk, this was mandatory): for large N, should not have any bias from a uniform distribution", function() {
    // We perform this test on an array of 1000 integers.
    // (Your function must shuffle an arbitrary array to pass this test.)
    // If your algorithm times out here, it is not running in linear time.
    let orderedArray = function() {
      let output = [];
      for (let i = 0; i < 1000; i++) {
        output.push(i);
      }
      return output;
    };
    let deck = orderedArray();
    // Keep a table of how often each integer appears in each array position...
    let cardPositionCounts = {};
    for (let i = 0; i < deck.length; i++) {
      let cardPosition = (cardPositionCounts[deck[i]] = {});
      for (let j = 0; j < deck.length; j++) {
        cardPosition[j] = 0;
      }
    }
    // ...over the course of five thousand shuffles
    let iterations = 1000 * 5;
    for (let i = 0; i < iterations; i++) {
      deck = orderedArray();
      let randomDeck = shuffleDeck(deck);
      for (let j = 0; j < randomDeck.length; j++) {
        cardPositionCounts[randomDeck[j]][j] += 1;
      }
    }
    // The result should not betray any obvious statistical bias.
    deck = orderedArray();
    // The expected number of occurrences for a particular card in a particular index is
    // iterations/1000 = 1
    let expected = 5,
      chi2 = 0;
    for (let i = 0; i < deck.length; i++) {
      let cardPosition = cardPositionCounts[deck[i]];
      for (let j = 0; j < deck.length; j++) {
        // calculate chi-squared test
        chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
      }
    }
    // quick and dirty statistical test:
    // if your shuffles are uniformly distributed, chi-squared should be roughly 1000^2
    let target = 1000 * 1000;
    let margin = 1000 * 10;
    expect(chi2).toBeGreaterThanOrEqual(target - margin);
    expect(chi2).toBeLessThanOrEqual(target + margin);
  });
});
