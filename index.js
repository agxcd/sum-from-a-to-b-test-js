
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let sum = 0;
  for (let i = fromN; i <= toN; i++){
    sum += i;
  }
  return sum;
}

module.exports = sum;