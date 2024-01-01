// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // LOOP FORWARD OVER THE ARRAY 
   for (var i = 0; i <= array.length - 1; i++) {
    // PRINT ITS VALUES 
     console.log(array[i]);
   }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // LOOP BACKWARDS OVER THE ARRAY
   for (var i = array.length - 1; i >= 0; i--) {
    // PRINT ITS VALUES
     console.log(array[i]);
   }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // RETURN AN ARRAY CONTAINING THE OBJECT KEYS
   return Object.keys(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // LOOP OVER THE OBJECT 
   // USING FOR IN LOOP
    for (var key in object) {
      // PRINT ITS KEYS
       console.log(key);
    }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // RETURN AN ARRAY CONTAINING OBJECT VALUES 
   return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // LOOP OVER THE OBJECT
   // USING FOR IN LOOP 
    for (var key in object) {
      // PRINT ITS VALUES
       console.log(object[key]);
    }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // RETURN THE NUMBER OF KEY/VALUE PAIRS WITHIN THE OBJECT
   // USING OBJECT VALUES METHOD TO CREATE ARRAY
    var a = Object.values(object);
  
   // RETURNING LENGTH OF THE VALUES ARRAY 
    return a.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // ASSIGNING VARIABLE
   // USING OBJECT VALUES METHOD
    var a = Object.values(object);

    // USING REVERSE METHOD ON ARRAY OF OBJECT VALUES
     a.reverse();
     
     // LOOPING OVER REVERSED ARRAY
      for (var i = 0; i <= a.length - 1; i++) {
        // CONSOLE LOG
         console.log(a[i]);
      }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
