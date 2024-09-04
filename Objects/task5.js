const users = [
    { name: 'Anna', email:'test@anna.com', age: 28},
    { name: 'Olga', email:'test@olga.com', age: 38},
    { name: 'Ivan', email:'test@ivan.com', age: 48},
]
for (const {name, email, age} of users) {
    console.log(name, email, age)
}