class TodoClass {
    fetchTodo() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .catch(error => {
                console.error('Error:', error);
            })
    }
}
class UserClass {
    fetchUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
const todo = new TodoClass();
const user = new UserClass();
const promisesCollection = Promise.all([todo.fetchTodo(), user.fetchUser()]);
promisesCollection.then(result => {
    console.log("Promise all result: ", result)
});
const promisesCollection2 = Promise.race([todo.fetchTodo(), user.fetchUser()]);
promisesCollection2.then(result => {
    console.log("Promise rece result: ", result)
});