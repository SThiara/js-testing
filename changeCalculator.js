const calculateChange = function(total, cash) {
  const changeDenos = {
    twentyDollars: 0,
    tenDollars: 0,
    fiveDollars: 0,
    twoDollars: 0,
    oneDollar: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  let changeBack = cash - total;

  while ((changeBack - 2000 > 0)) {
    changeBack = changeBack - 2000;
    changeDenos.twentyDollars++;
  }
  while ((changeBack - 1000 > 0)) {
    changeBack = changeBack - 1000;
    changeDenos.tenDollars++;
  }
  while ((changeBack - 500 > 0)) {
    changeBack = changeBack - 500;
    changeDenos.fiveDollars++;
  }
  while ((changeBack - 200 > 0)) {
    changeBack = changeBack - 200;
    changeDenos.twoDollars++;
  }
  while ((changeBack - 100 > 0)) {
    changeBack = changeBack - 100;
    changeDenos.oneDollar++;
  }
  while ((changeBack - 25 > 0)) {
    changeBack = changeBack - 25;
    changeDenos.quarters++;
  }
  while ((changeBack - 10 > 0)) {
    changeBack = changeBack - 10;
    changeDenos.dimes++;
  }
  while ((changeBack - 5 > 0)) {
    changeBack = changeBack - 5;
    changeDenos.nickels++;
  }
  while ((changeBack > 0)) {
    changeBack = changeBack - 1;
    changeDenos.pennies++;
  }

  const returnDenos = {};
  
  for (let key in changeDenos) {
    if (changeDenos[key] > 0) {
      returnDenos[key] = changeDenos[key];
    }
  }

  return returnDenos;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));