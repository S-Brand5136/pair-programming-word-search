const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present vertically", () => {
    const result = wordSearch(
      [
        ["A", "W", "C", "S", "Q", "U", "A", "L"],
        ["S", "E", "P", "E", "Q", "E", "L", "D"],
        ["Y", "F", "C", "I", "Q", "U", "A", "L"],
        ["H", "M", "J", "N", "E", "V", "R", "G"],
        ["W", "H", "C", "F", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "L", "A", "P", "A", "I"],
        ["O", "D", "C", "D", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("Should return false if matrix is empty", () => {
    const result = wordSearch([], "");
    assert.isFalse(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "S", "F", "Q", "U", "A", "L"],
        ["S", "E", "C", "N", "F", "E", "L", "D"],
        ["Y", "F", "H", "F", "Q", "U", "A", "L"],
        ["H", "M", "O", "T", "E", "V", "R", "G"],
        ["W", "H", "O", "S", "Y", "E", "R", "L"],
        ["B", "F", "L", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SCHOOL"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "S", "F", "Q", "U", "A", "L"],
        ["S", "L", "O", "O", "H", "C", "S", "D"],
        ["Y", "F", "H", "F", "Q", "U", "A", "L"],
        ["H", "M", "O", "T", "E", "V", "R", "G"],
        ["W", "H", "O", "S", "Y", "E", "R", "L"],
        ["B", "F", "L", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SCHOOL"
    );

    assert.isTrue(result);
  });
});
