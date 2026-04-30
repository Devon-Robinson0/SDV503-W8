// function totalPrice(items) {
//     // items is "trsuted" - caller's problem
//     return items.reduce(
//         (sum, it) => sum + it.price * it.qty, 0
//     );
// }

// // caller passes a corrupt item:
// // { price: "10", qty: 2 }
// // Result: "010" + ... (string concat!)
// // No error, just the wrong number

function totalPrice(items) {
    if (!Array.isArray(items)) {
        throw new TypeError("items must be an array");
    }
    for (const it of items) {
        if (typeof it.price !== 'number' ||
            typeof it.qty !== 'number') {
            throw new TypeError("bad item");
        }
    }
    return items.reduce(
        (sum, it) => sum + it.price * it.qty, 0
    );
}