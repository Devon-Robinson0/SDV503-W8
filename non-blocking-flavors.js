setTimeout(( )=> {
    console.log("3 seconds later");
}, 3000);
console.log("This runs first");

fetch("/api/users")
    .then(r => r.json())
    .then(users => console.log(users));
console.log("this runs first.");

async function load() {
    const r = await fetch("/api/users");
    console.log(await r.json());
}
load(); console.log("First.");