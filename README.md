# number-converters

Converts hex and roman numerals to decimal.

I wrote these ad hoc in an interview and it seemed "too good to waste".

## test

```
npm test

PASS  ./index.test.js
  numberConverters
    fromHex
      ✓ converts DEADBEEF to 3735928559 (4ms)
    fromRomanNumerals
      ✓ converts IIIV to 2 (1ms)
      ✓ converts VIII to 8
```

## test coverage
```
./node_modules/.bin/jest --coverage

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |       90 |      100 |      100 |                   |
 index.js |      100 |       90 |      100 |      100 |                12 |
----------|----------|----------|----------|----------|-------------------|
```
