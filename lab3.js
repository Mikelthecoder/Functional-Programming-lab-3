"use strict";
// Lab 3: Functional Programming in TypeScript
// 1. Filter numbers that are multiples of a given divisor
function* multiplesGenerator(arr, divisor) {
    for (const num of arr) {
        if (num % divisor === 0) {
            yield num;
        }
    }
}
function filterMultiples(arr, divisor) {
    return [...multiplesGenerator(arr, divisor)];
}
// 2. Join an array of strings with a specified delimiter
function* stringsGenerator(arr) {
    for (const str of arr) {
        yield str;
    }
}
function joinStrings(arr, delimiter) {
    return [...stringsGenerator(arr)].join(delimiter);
}
// 3. Sort an array of objects by a specified property
function* sortedObjectsGenerator(arr, key) {
    const sorted = [...arr].sort((a, b) => {
        if (a[key] < b[key])
            return -1;
        if (a[key] > b[key])
            return 1;
        return 0;
    });
    for (const item of sorted) {
        yield item;
    }
}
function sortByProperty(arr, key) {
    return [...sortedObjectsGenerator(arr, key)];
}
// 4. Higher-order function: wraps a function with logging and calls it twice
function withLoggingAndDouble(fn) {
    return (...args) => {
        console.log(`Calling function "${fn.name}" with args:`, args);
        const result1 = fn(...args);
        console.log(`First call result:`, result1);
        const result2 = fn(...args);
        console.log(`Second call result:`, result2);
        return [result1, result2];
    };
}
// --- Demo ---
console.log("=== 1. Filter Multiples ===");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18];
console.log("Array:", numbers);
console.log("Multiples of 3:", filterMultiples(numbers, 3));
console.log("Multiples of 5:", filterMultiples(numbers, 5));
console.log("\n=== 2. Join Strings ===");
const words = ["functional", "programming", "in", "TypeScript"];
console.log("Array:", words);
console.log('Joined with " - ":', joinStrings(words, " - "));
console.log('Joined with ", ":', joinStrings(words, ", "));
console.log("\n=== 3. Sort Objects by Property ===");
const people = [
    { name: "Charlie", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
];
console.log("Original:", people);
console.log("Sorted by name:", sortByProperty(people, "name"));
console.log("Sorted by age:", sortByProperty(people, "age"));
console.log("\n=== 4. Higher-Order Function with Logging ===");
function add(a, b) {
    return a + b;
}
const loggedAdd = withLoggingAndDouble(add);
const [first, second] = loggedAdd(3, 7);
console.log(`Both results: [${first}, ${second}]`);
