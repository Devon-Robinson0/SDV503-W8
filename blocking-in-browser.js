// In a browser
button.addEventListener("click", () => {
    let total = 0;
    // 500 million iterations. Pure CPU work. Syncronous.
    for (let i = 0; i < 500_000_000; i++) {
        total += i;
    }
    console.log("Total:", total);
});

// While this loop runs:
    // - The page does not redraw
    // - You cannot click anything else.
    // - Other event listeners do not fire
    // - Chrome may show "Page Unresponsive" dialog