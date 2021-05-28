const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipeName = "";
  for (let obj of recipes) {
    for (let ingredientA of bakeryA) {
      if (obj.ingredients[0] === ingredientA) {
        for (let ingredientB of bakeryB) {
          if (obj.ingredients[1] === ingredientB) {
            recipeName = obj.name;
          }
        }
      }
    }
    for (let ingredientB2 of bakeryB) {
      if (obj.ingredients[0] === ingredientB2) {
        for (let ingredientA2 of bakeryA) {
          if (obj.ingredients[1] === ingredientA2) {
            recipeName = obj.name;
          }
        }
      }
    }
  }
  return recipeName;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));