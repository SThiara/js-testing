const { performance } = require('perf_hooks');
const testStringLong = require('./testStringLong.js') 

const splitWithRegex = function(str) {
  const regex = new RegExp('\\s+');
  const splitStr = str.trim().split(regex).reverse();

  let i = 0;

  while (i < splitStr.length - 1) {
    splitStr[i] = `${splitStr[i].split('').reverse().join('-')} `;
    i++;
  }

  splitStr[i] = `${splitStr[i].split('').reverse().join('-')}`;

  return splitStr.join('');
}

const testString = '   Test   String   Test   String   Test   '

const t0 = performance.now()
const test = splitWithRegex(testStringLong)
console.log(splitWithRegex(testString))
const t1 = performance.now()

console.log(t1 - t0)