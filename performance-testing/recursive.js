const { performance } = require('perf_hooks');
const testStringLong = require('./testStringLong.js') 

const recursiveReverse = function(str) {
  if (str === "")
    return "";
  
  let i = 0;
  while (i < str.length) {
    if (str[i] !== " ") {
      break
    }
    i++
  }

  if (str[i + 1] === " ") {
    const regex = new RegExp('\\S')
    if (!regex.test(str.substr(1))) {
      return str.charAt(i)
    }
    return `${recursiveReverse(str.substr(i + 1))} ${str.charAt(i)}`
  }

  return `${recursiveReverse(str.substr(i + 1))}-${str.charAt(i)}`
}

const testString = '   Test   String   Test   String   Test   '
const testAgainst = 't-s-e-T g-n-i-r-t-S t-s-e-T g-n-i-r-t-S t-s-e-T'

console.log(recursiveReverse(testString))

// const t0 = performance.now()
// const test = recursiveReverse(testString)
// const t1 = performance.now()

// console.log(t1 - t0)