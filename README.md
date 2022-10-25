# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rahim1213/lotide`

**Require it:**

`const _ = require('@rahim1213/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head : Finds the first value in any array
* tail : slices the first value in any array to give you the "tail" of the array
* middle : finds the innermost middle values of an array so long as its length is 3 or more
* eqArrays: compares 2 arrays to see if theyre equal
* assertArraysEqual : logs a messages if both arrays are equal
* assertEqual : logs a message if actual is === to expected
* assertObjectsEqual : logs a message if two objects are equal
* without: removes an element from an array
* countLetters: counts the letters in a string
* countOnly : counts the items in a string, object or array and returns a value
* eqObjects : compares two objects 
* findKey: finds a specific key based on a call back function
* findKeyByValue: finds a specific key based on a value
* letterPositions: which will return all the indices in the string where each character is found.
* map: creates a new array based on a call back function
* takeUntil: creates a new array untill it hits its callback parameters