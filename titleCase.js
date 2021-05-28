const titleCase = titleInput => {
  if (titleInput === "") {
    return titleInput;
  }
  let initString = titleInput.toLowerCase().split("");
  initString[0] = initString[0].toUpperCase();
  for (let i = 0; i < initString.length; i++) {
    if (initString[i] === " ") {
      initString[i + 1] = initString[i + 1].toUpperCase();
    }
  }
  return initString.join("");
};

console.log(titleCase("test"));
console.log(titleCase("a cooler way to test"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase(""));
console.log(titleCase("a é I o u"));