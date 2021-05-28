
function sum(fromN, toN) {
  if (toN > fromN) {
    return fromN + sum(fromN + 1, toN)
  }
  return fromN
}

module.exports = sum;