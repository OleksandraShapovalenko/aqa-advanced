function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        })
}


function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}
const promisesCollection = Promise.all([fetchTodo(), fetchUser()]);
promisesCollection.then(result => {
    console.log("Promise all result: ", result)
});
const promisesCollection2 = Promise.race([fetchTodo(), fetchUser()]);
promisesCollection2.then(result => {
    console.log("Promise rece result: ", result)
});