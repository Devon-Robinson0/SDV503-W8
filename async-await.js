function loadUser(id) {
	return fetch("/users/" + id)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            return user;
        });
}

// Modern
async function loadUser(id) {
    const response = await fetch("/users/" + id)
    const user = await response.json();
    console.log(user);
    return user;
}