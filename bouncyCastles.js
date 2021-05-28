const sphereVolume = function(radius) {
  let sphere = (4 / 3) * Math.PI * radius * radius * radius;
  return sphere;
}

const coneVolume = function(radius, height) {
  let cone = (1 / 3) * Math.PI * radius * radius * height;
  return cone;
}

const prismVolume = function(height, width, depth) {
  let prism = height * width * depth;
  return prism;
}

const totalVolume = function(solids) {
  let finalVolume = 0;
  for (let obj of solids) {
    switch (obj.type) {
      case "sphere":
        finalVolume += sphereVolume(obj.radius);
        break;
        case "cone":
          finalVolume += coneVolume(obj.radius, obj.height);
          break;
          case "prism":
            finalVolume += prismVolume(obj.height, obj.width, obj.depth);
            break;
    }
  }
  return finalVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

