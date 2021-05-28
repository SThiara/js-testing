const multiplicationTable = function(maxValue) {
  let tableInit = [];
  let tableFinal = [];
  for (let b = 0; b < maxValue; b++) {
    tableInit.push([]);
  }
  for (let i = 0; i < maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      tableInit[i].push((i + 1) * j);
    }
  }
  for (let x of tableInit) {
    tableFinal.push(x.join(" "));
  }
  return tableFinal;
};