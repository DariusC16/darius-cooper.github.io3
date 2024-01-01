// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // ASSIGNING VARIABLES
     var output = '';
     var a;
     // USING SPLIT METHOD TO BREAK APART STRING
      a = input.split('');
      
      // USING FOR LOOP BACKWARDS TO ACCESS ARRAY
       for (var i = a.length - 1; i >= 0; i--) {
        // USING JOIN METHOD TO COMBINE ELEMENTS IN ARRAY TOGETHER
         // USING PLUS OPERATOR TO ADD EVERY ITERATION TOGETHER
         output += a[i];
       }
    
    // RETURNING NEW STRING  
     return output;  
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}