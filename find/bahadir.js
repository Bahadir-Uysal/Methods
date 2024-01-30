const points = [70,75,25,35,10,80,27];

const highPoint = points.find(e => {
    return e > 70
});

console.log(highPoint);