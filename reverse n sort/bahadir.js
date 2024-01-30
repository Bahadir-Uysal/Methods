const points = [70,75,25,3,10,80,27];
// points.sort();
// console.log(points);

points.sort((a,b) => b-a);


const names = ["can","tuba","elif","hakan","osman"];
names.sort();
console.log(names);

names.reverse();
console.log(names);




const students = [
    {name:"can", point:40},
    {name:"tuba",point:60},
    {name:"elif",point:30},
    {name:"osman",point:100},
];

students.sort((a,b) => {
    if(a.point > b.point)
    {
        return -1 ;
    }
    else if(b.point > a.point)
    {
        return 1 ;
    }
    else
    {
        return 0 ;
    }
    
});



console.log(students);


