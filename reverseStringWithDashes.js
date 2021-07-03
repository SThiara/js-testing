const usingArrayStoreString = function(str) {
  const splitStr = str.trim().split(' ').reverse()
  let fixedStr = ''

  for (const split of splitStr) {
    const reverse = split.split('').reverse().join('-')
    fixedStr += `${reverse} `
  }

  return fixedStr.trim()
}

const usingArrayStoreArray = function(str) {
  const splitStr = str.trim().split(' ').reverse()
  const fixedStr = []

  for (const split of splitStr) {
    const reverse = split.split('').reverse().join('-')
    fixedStr.push(`${reverse} `)
  }

  return fixedStr.join('').trim()
}

const noArray = function(str) {
  const trimStr = str.trim()
  if (trimStr === '') {
    return trimStr
  }

  let fixedStr = ''
  let actualStr = ''
  
  for (let i = trimStr.length - 1; i > -1; i--) {
    if (trimStr[i] !== ' ') {
      fixedStr += `${trimStr[i]}-`
    } else {
      actualStr += `${fixedStr.slice(0, fixedStr.length - 1)} `
      fixedStr = ''
    }
    if (i === 0) {
      actualStr += `${fixedStr.slice(0, fixedStr.length - 1)} `
    }
  }
  return actualStr.trim()
}

// currently, only the final two can complete the task given this string: '  Test    String    Test  '

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

const testString = '  Test    String    Test  '


console.log(noArrayWithTrim(testString))
console.log(noArrayNoTrim(testString))
console.log(noArrayWithTrim(testString).length)
console.log(noArrayNoTrim(testString).length)