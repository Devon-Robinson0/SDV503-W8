// BLOCKING
//pretend this is synchronous and slow
const data = readFromServer(); // 800ms
console.log("Got data"); // waits

// meanwhile: nothing else can run
// Ui freezes. other requests queue
// Whole program is paused

// NON BLOCKING
// Async - start the request, dont wait:
const promise = readFromServer();
console.log("Request sent"); // Runs now

// other code keeps running
// When the data arrives, JS picks
// the result up via the promise