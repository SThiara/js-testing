/* const camelCase = function(input) {
  let spaceIndices = [];
  let camelStatement = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      spaceIndices.push(i);
    }
  }
  if (spaceIndices.length === 0) {
    return input;
  } else {
    for (let j = 0; j < spaceIndices[0]; j++) {
      camelStatement += input[j];
    }
    for (k = 0; k < spaceIndices.length; k++) {
      let indexToCap = Number(spaceIndices[k]) + 1;
      camelStatement += input.charAt(indexToCap).toUpperCase();
      for (let l = spaceIndices[k] + 2; ((spaceIndices[k + 1]) ? (l < spaceIndices[k + 1]) : (l < input.length)); l++) {
        camelStatement += input[l];
      }
    }
  }
  return camelStatement;
}; */


const camelCase = function(input) {
  let initString = input.split(" ");
  console.log(initString);
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
}

console.log(camelCase("this is a string"));
