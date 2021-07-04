const { performance } = require('perf_hooks');
const testStringLong = require('./testStringLong.js') 

const usingArrayStoreArray = function(str) {
  const splitStr = str.trim().split(' ').reverse()
  const fixedStr = []

  for (const split of splitStr) {
    if (split !== '') {
      const reverse = split.split('').reverse().join('-')
      fixedStr.push(`${reverse} `)
    }
  }

  return fixedStr.join('').trim()
}

const testString = '   Test   String   Test   String   Test   '

const t0 = performance.now()
const test = usingArrayStoreArray(testStringLong)
const t1 = performance.now()

console.log(t1 - t0)