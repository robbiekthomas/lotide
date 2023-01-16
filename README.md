# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @robbiekt/lotide`

**Require it:**

`const _ = require('@robbiekt/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(...)`: checks to see if two arrays are equal
- `assertEqual(...)`: checks to see if two values are equal
- `assertObjectsEqual(...)`: checks to see if two objects are equal
- `countLetters(...)`: counts the amount of each letter in a string
- `countOnly(...)`: counts only the amounts of elements referenced in the arguments
- `eqArrays(...)`: returns true if the arrays are equal
- `eqObjects(...)`: returns true if the objects are equal
- `findKey(...)`: finds the key of an object that is described in a callback function
- `findKeyByValue(...)`: finds the key of an object by it's value
- `flatten(...)`: flattens an array (only nested once)
- `head(...)`: finds the first element of an array
- `letterPositions(...)`: finds the index of each letter in a string
- `map(...)`: replication of the Array.Prototype.map function
- `middle(...)`: finds the middle value in an array
- `tail(...)`: returns the array without the first element
- `takeUntil(...)`: returns the array until the condition of the callback
- `without(...)`: filters out all the unwanted values in an array
