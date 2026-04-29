// Validates a "book" object. returns a list of error messages -
// empty list means valid
function validateBook(input) {
    const errors = [];
    if (input === null || typeof input !== 'object') return ["Not an object"];

    // presence + type
    if (typeof input.id !== 'string' || input.id.trim() === "") errors.push("id is required");
    if (typeof input.title !== 'string' || input.title.trim() === "") errors.push("title is required");
    if (typeof input.author !== 'string') errors.push('author musyt be a string');

    // Range
    const thisYear = new Date().getFullYear();
    if (typeof input.year !== 'number' || input.year < 1 || input.year > thisYear) {
        errors.push(`year must be between 1 and ${thisYear}`);
    }
    return errors;
}
