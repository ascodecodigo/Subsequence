const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 8, 10]

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let cont = 0

  for (i = 0; i < array.length; i++) {
    if (array[i] === sequence[cont]) {
      cont++
    }
  }
  if (cont === sequence.length) {
    return true
  } else {
    return false
  }
}
console.log(isValidSubsequence(array, sequence))
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence