const car1 = {
    brand: "Honda",
    model: "X",
    year: 2016
}
const car2 = {
    brand: "Opel",
    model: "Y",
    owner: 2020
}
const car3 = {
    ...car1, ...car2
}
console.log(car3)