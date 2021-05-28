const array = [10, 2, 5, 1, 9];

array.sort((a, b) => {
  return a - b;
}) 

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const studentSortFunc = (a, b) => {
  if (a.name !== b.name) {
    return a.name > b.name
  }
  if (a.age !== b.age) {
    return a.age > b.age
  }
  return 0
}

students.sort(studentSortFunc);

console.log(students);