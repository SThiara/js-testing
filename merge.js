const merge = function(array1, array2) {
  let catArray = [];
  for (let x of array1) {
    catArray.push(x);
  }
  for (let y of array2) {
    catArray.push(y);
  }
  let finalArray = [];
  let loopCount = catArray.length;

  for (let i = 0; i < loopCount; i++) {
    let lowNum = catArray[0];
    let lowNumIndex = 0;
    for (let j = 0; j < catArray.length; j++) {
      if (catArray[j] < lowNum) {
        lowNum = catArray[j];
        lowNumIndex = j;
      }
    }
    finalArray.push(lowNum);
    catArray.splice(lowNumIndex, 1)
  }
  return finalArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);