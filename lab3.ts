// Lab 3: Functional Programming in TypeScript

// 1. Filter numbers that are multiples of a given divisor
function* multiplesGenerator(arr: number[], divisor: number): Generator<number> {
  for (const num of arr) {
    if (num % divisor === 0) {
      yield num;
    }
  }
}

function filterMultiples(arr: number[], divisor: number): number[] {
  return [...multiplesGenerator(arr, divisor)];
}

// 2. Join an array of strings with a specified delimiter
function* stringsGenerator(arr: string[]): Generator<string> {
  for (const str of arr) {
    yield str;
  }
}

function joinStrings(arr: string[], delimiter: string): string {
  return [...stringsGenerator(arr)].join(delimiter);
}

// 3. Sort an array of objects by a specified property
function* sortedObjectsGenerator<T>(arr: T[], key: keyof T): Generator<T> {
  const sorted = [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
  for (const item of sorted) {
    yield item;
  }
}

function sortByProperty<T>(arr: T[], key: keyof T): T[] {
  return [...sortedObjectsGenerator(arr, key)];
}

// 4. Higher-order function: wraps a function with logging and calls it twice
function withLoggingAndDouble<T extends unknown[], R>(
  fn: (...args: T) => R
): (...args: T) => [R, R] {
  return (...args: T): [R, R] => {
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
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18];
console.log("Array:", numbers);
console.log("Multiples of 3:", filterMultiples(numbers, 3));
console.log("Multiples of 5:", filterMultiples(numbers, 5));

console.log("\n=== 2. Join Strings ===");
const words: string[] = ["functional", "programming", "in", "TypeScript"];
console.log("Array:", words);
console.log('Joined with " - ":', joinStrings(words, " - "));
console.log('Joined with ", ":', joinStrings(words, ", "));

console.log("\n=== 3. Sort Objects by Property ===");
type Person = { name: string; age: number };
const people: Person[] = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
];
console.log("Original:", people);
console.log("Sorted by name:", sortByProperty(people, "name"));
console.log("Sorted by age:", sortByProperty(people, "age"));

console.log("\n=== 4. Higher-Order Function with Logging ===");
function add(a: number, b: number): number {
  return a + b;
}
const loggedAdd = withLoggingAndDouble(add);
const [first, second] = loggedAdd(3, 7);
console.log(`Both results: [${first}, ${second}]`);
