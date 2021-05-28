const entered = process.argv.slice(2);

for (const enteredWord of entered) {
  let thingToPrint = "";
  for (let i = enteredWord.length - 1; i >= 0; i--) {
    thingToPrint += enteredWord[i];
  }
  console.log(thingToPrint);
}