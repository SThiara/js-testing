const { performance } = require('perf_hooks');
// const testStringLong = require('./testStringLong.js') 

const noArrayNoTrim = function(str) {
  let returnStr = ''
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] !== ' ') {
      if (str[i-1] !== ' ') {
        returnStr += `${str[i]}-`
      } else {
        returnStr += `${str[i]} `
      }
    }
  }
  if (str[0] !== ' ') {
    returnStr += str[0]
  } else {
    returnStr = returnStr.slice(0, returnStr.length - 1)
  }
  return returnStr
}

const testString = '   Test   String   Test   String   Test   '

const t0 = performance.now()
const test = noArrayNoTrim(testString)
const t1 = performance.now()

console.log(t1 - t0)