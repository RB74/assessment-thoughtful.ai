## Overview
This project is written in TypeScript, I added a small extra setup to support compilation and testing. I used a standard tsconfig.json to compile the TypeScript source into a dist/ directory.
For testing, I leveraged Node22's built-in test runner to support assertions and coverage. This approache keeps the solution lightweight, dependency-free, and easy to run with a single command.

Approaches for extra setup:
* initialized TypeScript
* compiled the .ts file into dist/
* added a small test/ directory with Node’s native test files

Extra Setup Included

* Initialized TypeScript for type-safe development
* Compiled .ts files into dist/ output folder
* Added a minimal test/ directory with Node’s native test runner

## Project Structure
    sort-package/
    |---package.json
    |---tsconfig.json
    |
    |---src/
    |   |---sort_package.ts
    |
    |---dist/
    |   |---sort_package.js         # compiled output
    |   |...
    |
    |---test/
        |---sort_package.test.js    # test runner

## 


## Testing (Node 22's Native Test Runner)

### Run tests:
```
node --test
```

### Test file(s):
```
test/sort_package.test.js
```