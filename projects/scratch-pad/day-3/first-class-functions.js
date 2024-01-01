// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // RETURN A FUNCTION TEST WHETHER A GIVEN VALUE
     return function(value) {
        // IS GREATER THAN THE BASE
         return value > base;
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // RETURN A FUNCTION
     return function(value) {
        // TESTS WHETHER A GIVEN VALUE IS LESS THAN THE BASE
         return value < base;
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // RETURN A FUNCTION
     return function(string) {
        // TESTS WHETHER A GIVEN STRING STARTS WITH THE STARTSWITH CHARACTER
        // IF FIRST CHARACTER OF STRING IS STARTSWITH LOWER CASE
         if (string.charAt(0) === startsWith.toLowerCase()) {
            // RETURN TRUE
             return true
         } // IF THE FIRST CHARACTER OF A STRING IS STARTSWITH UPPER CASE
             else if (string.charAt(0) === startsWith.toUpperCase()) {
                // RETURN TRUE
                return true;
         } else {
            // RETURN FALSE
             return false;
            }
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // RETURN A FUNCTION
    return function(string) {
        // TESTS WHETHER A GIVEN STRING ENDSWITH THE STARTSWITH CHARACTER
        // IF FIRST CHARACTER OF STRING IS ENDSWITH LOWER CASE
         if (string.charAt(string.length - 1) === endsWith.toLowerCase()) {
            // RETURN TRUE
             return true
         } // IF THE FIRST CHARACTER OF A STRING IS STARTSWITH UPPER CASE
             else if (string.charAt(string.length - 1) === endsWith.toUpperCase()) {
                // RETURN TRUE
                return true;
         } else {
            // RETURN FALSE
             return false;
            }
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // CREATING VARIABLE FOR OUTPUT
     var a = [];
     // USING FOR LOOP FOR ARRAY OF STRINGS 
      for (var i = 0; i <= strings.length - 1; i++) {
         // PASSING EACH STRING TO THE MODIFY FUNCTION
          // PUSHING EACH STRING INTO NEW ARRAY
          a.push(modify(strings[i]));
        }
    return a;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // GIVEN AN ARRAY OF STRINGS 
     // LOOPING OVER ARRAY
      for (var i = 0; i <= strings.length - 1; i++) {
        // PASSING STRINGS INTO FUNCTION
         // IF ALL STRINGS DIDN'T PASS
          if (!test(strings[i])) {
            // RETURN FALSE
             return false;
          }
      }
      return true;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
