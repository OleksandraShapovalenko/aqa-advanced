function calculateRectangleArea(width, height) {
    return width * height;
}
console.log("Rectangle area is " + calculateRectangleArea(5,10));


const RectangleArea = function(width, height) {
    return width * height;
}
console.log("Rectangle area is " + RectangleArea(5, 10));

const areaRectangl = (width, height) => width * height
console.log("Rectangle area is " + areaRectangl(5, 10));