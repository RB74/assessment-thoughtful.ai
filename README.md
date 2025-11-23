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

## Testing (Node 22's Native Test Runner)

### Run tests:
```
node --test
```

### Test file(s):
```
test/sort_package.test.js
```