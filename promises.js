// fetch() returns a Promise - not the response, the promise of one
const promise = fetch('https://api.example.com/users/42');

// Three states: pending --> fulfilled OR rejected

// .then() tuns when the promise fulfills
// . catch() runs when it rejects
promise
    .then(response => response.json()) // chain - return another
promise 
    .then(user => console.log(user))
    .catch(err => console.error("fetch failed:", err.message))