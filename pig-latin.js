let entered = process.argv.slice(2);
let returned = [];
let returnStatement = "";
for (let thing of entered) {
  let piggy = thing.split("");
  piggy.push(piggy.shift());
  piggy.push("ay");
  returned.push(piggy.join(""));
}
for (let word of returned) {
  returnStatement += `${word} `;
}
console.log(returnStatement);