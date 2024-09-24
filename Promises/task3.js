async function tetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error)
    }
}
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error)
    }
}
async function run() {
    const resultCollection = await Promise.all([tetchTodo(), fetchUser()]);
    console.log("Result promise all:", resultCollection);
    const result = await Promise.race([tetchTodo(), fetchUser()]);
    console.log("Result promise race", result);
}
run()
