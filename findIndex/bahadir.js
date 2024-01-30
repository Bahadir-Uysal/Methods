const points = [70,75,25,35,10,80,27];
const arrayIndex = points.findIndex(e => e==35);
points[arrayIndex]=45;
console.log(points);

const students = [
    {name:"can", point:40},
    {name:"tuba",point:60},
    {name:"elif",point:30},
    {name:"osman",point:100},
];

const objectIndex = students.findIndex(e => e.name == "osman");
students[objectIndex].name = "hasan"
console.log(students);

const newPoint = students.findIndex(e => e.name == "elif")
students[newPoint].point = 80
console.log(students);