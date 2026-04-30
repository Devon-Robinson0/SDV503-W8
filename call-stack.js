function greet(name) {
    return "Hello, " + name;
}
function welcome(user) {
    const msg = greet(user.name);
    console.log(msg);
}
welcome({ name: "Alex" });