const makeCase = function(input, theCase) {

  let stringPhase1 = input;
  let stringPhase2 = "";

  if (typeof theCase === "object") {
    for (let string of theCase) {
      switch (string) {
      case "camel":
        stringPhase1 = camelConverter(input);
        break;
      case "pascal":
        stringPhase1 = pascalConverter(input);
        break;
      case "snake":
        stringPhase1 = snakeConverter(input);
        break;
      case "kebab":
        stringPhase1 = kebabConverter(input);
        break;
      case "title":
        stringPhase1 = titleConverter(input);
        break;
      }
    }
    for (let string of theCase) {
      switch (string) {
      case "vowel":
        stringPhase2 = stringPhase1.split("");
        stringPhase2.forEach(vowelConverter);
        stringPhase1 = stringPhase2.join("");
        break;
      case "consonant":
        stringPhase2 = stringPhase1.split("");
        stringPhase2.forEach(consonantConverter);
        stringPhase1 = stringPhase2.join("");
        break;
      case "upper":
        stringPhase1 = stringPhase1.toUpperCase();
        break;
      case "lower":
        stringPhase1 = stringPhase1.toLowerCase();
        break;
      }
    }
  }

  switch (theCase) {
  case "camel":
    stringPhase1 = camelConverter(input);
    break;
  case "pascal":
    stringPhase1 = pascalConverter(input);
    break;
  case "snake":
    stringPhase1 = snakeConverter(input);
    break;
  case "kebab":
    stringPhase1 = kebabConverter(input);
    break;
  case "title":
    stringPhase1 = titleConverter(input);
    break;
  case "vowel":
    stringPhase2 = stringPhase1.split("");
    stringPhase2.forEach(vowelConverter);
    stringPhase1 = stringPhase2.join("");
    break;
  case "consonant":
    stringPhase2 = stringPhase1.split("");
    stringPhase2.forEach(consonantConverter);
    stringPhase1 = stringPhase2.join("");
    break;
  case "upper":
    stringPhase1 = stringPhase1.toUpperCase();
    break;
  case "lower":
    stringPhase1 = stringPhase1.toLowerCase();
  }
  return stringPhase1;
};

const pascalConverter = pascalInput => {
  let initString = pascalInput.split(" ");
  let capitalized = "";
  let finalString = [];

  for (let i = 0; i < initString.length; i++) {
    let midString = initString[i].split("");
    capitalized = midString.shift();
    capitalized = capitalized.toUpperCase();
    midString.unshift(capitalized);
    finalString.push(midString.join(""));
  }
  return finalString.join("");
};

const snakeConverter = snakeInput => {
  let initString = snakeInput.split("");
  for (let i = 0; i < initString.length; i++) {
    if (initString[i] === " ") {
      initString[i] = "_";
    }
  }
  return initString.join("");
};

const kebabConverter = kebabInput => {
  let initString = kebabInput.split("");
  for (let i = 0; i < initString.length; i++) {
    if (initString[i] === " ") {
      initString[i] = "-";
    }
  }
  return initString.join("");
};

const titleConverter = titleInput => {
  let initString = titleInput.split("");
  initString[0] = initString[0].toUpperCase();
  for (let i = 0; i < initString.length; i++) {
    if (initString[i] === " ") {
      initString[i + 1] = initString[i + 1].toUpperCase();
    }
  }
  return initString.join("");
};

const camelConverter = camelInput => {
  let initString = camelInput.split(" ");
  let capitalized = "";
  let finalString = [initString[0]];

  for (let i = 1; i < initString.length; i++) {
    let midString = initString[i].split("");
    capitalized = midString.shift();
    capitalized = capitalized.toUpperCase();
    midString.unshift(capitalized);
    finalString.push(midString.join(""));
  }
  return finalString.join("");
};

const consonantConverter = (consonant, index, array) => {
  let shouldCap = true;
  switch (consonant) {
  case "a":
    shouldCap = false;
    break;
  case "e":
    shouldCap = false;
    break;
  case "i":
    shouldCap = false;
    break;
  case "o":
    shouldCap = false;
    break;
  case "u":
    shouldCap = false;
    break;
  case " ":
    shouldCap = false;
    break;
  case "-":
    shouldCap = false;
    break;
  case "_":
    shouldCap = false;
    break;
  }
  if (shouldCap) {
    array[index] = consonant.toUpperCase();
  }
};

const vowelConverter = (vowel, index, array) => {
  let shouldCap = false;
  switch (vowel) {
  case "a":
    shouldCap = true;
    break;
  case "e":
    shouldCap = true;
    break;
  case "i":
    shouldCap = true;
    break;
  case "o":
    shouldCap = true;
    break;
  case "u":
    shouldCap = true;
    break;
  }
  if (shouldCap) {
    array[index] = vowel.toUpperCase();
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));