function makeIdGenerator() {
  let id = 0;
  return function() {
    id += 1;
    return id;
  }
}

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = -1;

  return function() {
    index += 1;
    return list[index];
  }
}

const countdownGenerator = function (x) {
  let timer = x + 1;

  return function() {
    if (timer > 0) {
      timer -= 1;
      if (timer === 0) {
        return "Blast Off!"
      }
      return `T-minus ${timer}...`
    }
    return "Rocket gone woosh"
  }
};

const wrapLog = function (callback, name) {
  return function() {
    let args = "";
    for (const value of arguments) {
      args += `${value}, `
    }
    const finalArgs = args.slice(0, args.length - 2) 
    return `${name}(${finalArgs}) => ${callback.apply(null, arguments)}`
  }
};

const area = function (x, y) {
  return x * y;
};
const logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24