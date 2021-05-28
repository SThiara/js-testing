const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(value => {
  const keys = Object.keys(value);
  let sum = 0;
  for (const key of keys) {
    sum += Math.pow(value[key], 2);
  }
  return Math.sqrt(sum)
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);