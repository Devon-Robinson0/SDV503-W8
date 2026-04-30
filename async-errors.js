async function loadUser(id) {
    try {
        const response = await fetch("/users/" + id);
        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }
        return await response.json();
    } catch (err) {
        // same shape as Lecture A - wrapping awaits
        console.error("loaduser failed", err.message);
        return null;
    }
}



