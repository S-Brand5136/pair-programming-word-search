// Pair programming challenge : Matthew and Brandon

const transpose = function (matrix) {
  let result = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!result[col]) {
        result.push([]);
      }
      result[col].push(matrix[row][col]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
    if (l.split("").reverse().join("").includes(word)) {
      return true;
    }
  }

  const vertical = transpose(letters);
  const verticalJoin = vertical.map((ls) => ls.join(""));
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
    if (l.split("").reverse().join("").includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
