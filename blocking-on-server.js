// Node express handler - handles many users on ONE thread
app.get("/report", (req, res) => { 
    // Synchronous file read. The thread waits here.
    const raw = readFileSync(".large-data.json", "utf8");

    // Synchronous parse. Also blocks
    const data = JSON.parse(raw);

    res.json(summarise(data));
});

// While this handler runs:
// - every other incoming request waits.
// - health checks fail. Timeouts fire. Users see slowness.
// - the server looks "down" from the outside.