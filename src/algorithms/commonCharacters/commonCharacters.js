export function commonCharacters(string1, string2) {
  if (string1 === "" || string2 === "") {
    return "";
  }

  let results = [];

  for (let i = 0; i < string1.length; i++) {
    let currentChar = string1[i];
    if (
      string2.includes(currentChar) &&
      !results.includes(currentChar) &&
      currentChar !== " "
    ) {
      results.push(currentChar);
    }
  }

  return results.join("");
}
