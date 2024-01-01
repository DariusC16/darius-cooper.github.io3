// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // IF THE VALUE IS AN ARRAY
     if (Array.isArray(value)) {
        // RETURN TRUE 
         return true;
     } 
     // RETURN FALSE OTHERWISE
      return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // IF VALUE IS NULL RETURN FALSE
     if (value === null) {
        // RETURN FALSE
         return false;
     } // IF VALUE IS AN ARRAY
        else if (Array.isArray(value)) {
            // RETURN FALSE 
             return false;
        } // IF VALUE IS A DATE
           else if (value instanceof Date) {
            // RETURN FALSE
             return false;
           } // IF VALUE IS AN OBJECT
              else if (typeof value === 'object') {
                // RETURN TRUE
                 return true;
              } else {
                return false;
              }


    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // IF VALUE IS NULL 
     if (value === null) {
        // RETURN FALSE 
         return false;
     } // IF VALUE IS DATE
        else if (value instanceof Date) {
            // RETURN FALSE
             return false;
        } // IF VALUE IS EITHER AN ARRAY OR OBJECT
           else if (Array.isArray(value) || typeof value === 'object') {
            // RETURN TRUE
             return true;
           } else {
            // RETURN FALSE 
             return false;
           }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // IF VALUE IS NULL
     if (value === null) {
        // RETURN NULL
         return 'null';
     } // IF VALUE IS UNDEFINED
        else if (typeof value === 'undefined') {
            // RETURN UNDEFINED
             return 'undefined';
        } // IF VALUE IS DATE 
           else if (value instanceof Date) {
            // RETURN DATE
             return 'date';
           } // IF VALUE IS STRING
              else if (typeof value === 'string') {
                // RETURN STRING
                 return 'string';
              } // IF VALUE IS AN ARRAY
                 else if (Array.isArray(value)) {
                    // RETURN ARRAY
                     return 'array'; 
                 } // IF VALUE IS OBJECT
                    else if (typeof value === 'object') {
                        // RETURN OBJECT
                         return 'object';
                    }  // IF VALUE IS NUMBER
                        else if (typeof value === 'number') {
                            // RETURN NUMBER
                             return 'number';
                        } // IF VALUE IS BOOLEAN
                           else if (typeof value === 'boolean') {
                            // RETURN BOOLEAN
                             return 'boolean';
                           } else if (typeof value === 'function') {
                            // RETURN FUNCTION
                             return 'function';
                           } else {
                            return value;
                           }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
