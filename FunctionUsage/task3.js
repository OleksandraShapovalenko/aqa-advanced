function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("This is not a number!")
    } else if (denominator === 0) {
        throw new Error("No result!");
    }
    return numerator / denominator;
}

try {
    divide(50, 2)
} catch (error) {
    console.log("Error:", error);
} finally {
    console.log("Work is done");
}

try {
    divide(100, 0)
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Work is done");
}
try {
    divide('Tesxt', 6)
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Work is done");
}
