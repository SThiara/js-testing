const organizeInstructors = function(instructors) {
  const courseList = {};

  for (let obj of instructors) {
    if (!(courseList[obj.course])) {
      courseList[obj.course] = [obj.name];
    } else {
      courseList[obj.course].push(obj.name);
    }
  }

  return courseList;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));