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

const testString = '   Test   String   Test   '

console.log(noArrayNoTrim(testString))
console.log(noArrayWithTrim(testString))

console.log(usingArrayStoreArray(testString))
console.log(usingArrayStoreString(testString))

