const { performance } = require('perf_hooks');
const testStringLong = require('./testStringLong.js') 

const noArrayWithTrim = function(str) {
  let trimStr = str.trim()
  let returnStr = ''

  for (let i = trimStr.length - 1; i > 0; i--) {
    if (trimStr[i] !== ' ') {
      if (trimStr[i-1] !== ' ') {
        returnStr += `${trimStr[i]}-`
      } else {
        returnStr += `${trimStr[i]} `
      }
    }
  }
  returnStr += trimStr[0]
  return returnStr
}

const t0 = performance.now()
const test = noArrayWithTrim(testStringLong)
const t1 = performance.now()

console.log(t1 - t0)