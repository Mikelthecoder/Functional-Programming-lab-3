# Lab 3 – Functional Programming in TypeScript

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

## Setup

Install the required dependencies:

```bash
npm install
```

## Running the Project

### Option 1: Compile then run (recommended)

Compile the TypeScript file to JavaScript, then execute it:

```bash
npx tsc --target ES2020 --module commonjs --strict lab3.ts
node lab3.js
```

### Option 2: Run directly with ts-node

```bash
npx ts-node lab3.ts
```

> Note: ts-node will be downloaded automatically on first run if not installed.

## What the Program Does

The program demonstrates four functional programming concepts:

1. **Filter Multiples** – filters an array of numbers, keeping only multiples of a given divisor
2. **Join Strings** – joins a string array with a custom delimiter
3. **Sort by Property** – sorts an array of objects by a specified key
4. **Higher-Order Function with Logging** – wraps any function to log its calls and execute it twice

## Project Structure

```
lab3/
├── lab3.ts          # TypeScript source code
├── lab3.js          # Compiled JavaScript output
├── lab3.txt         # Lab assignment description
├── package.json     # Project metadata and dependencies
└── README.md        # This file
```
