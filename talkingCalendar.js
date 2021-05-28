const talkingCalendar = function(date) {
  let dateYear = "";
  let dateMonth = "";
  let dateDay = "";

  for (let i = 0; i < 4; i++) {
    dateYear += date[i];
  }

  for (let j = 5; j < 7; j++) {
    dateMonth += date[j];
  }

  for (let k = 9; k < 11; k++) {
    dateDay += date[k];
  }

  
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));