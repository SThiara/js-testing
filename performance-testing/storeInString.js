const { performance } = require('perf_hooks');
const testStringLong = require('./testStringLong.js') 

const usingArrayStoreString = function(str) {
  const splitStr = str.trim().split(' ').reverse()
  let fixedStr = ''

  for (const split of splitStr) {
    if (split !== '') {
      const reverse = split.split('').reverse().join('-')
      fixedStr += `${reverse} `
    }
  }

  return fixedStr.trim()
}


const t0 = performance.now()
const test = usingArrayStoreString(testStringLong)
const t1 = performance.now()

console.log(t1 - t0)