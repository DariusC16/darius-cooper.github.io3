// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // RETURN LENGTH OF THE STRING
     return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // RETURN A STRING FORCED TO LOWERCASE
     // USING LOWERCASE METHOD
     return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // RETURN A NEW STRING FORCED TO UPPERCASE 
     // USING UPPERCASE METHOD 
      return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
     // USING LOWER CASE METHOD ON STRING
     // CREATING VARIABLES
     var a = string.toLowerCase();
     var b = '';

     // ASSIGNING VARIABLE AND USING SPLIT METHOD
      b = a.split(' ');

      // RETURNING STRING JOINED TOGETHER WITH A DASH
       return b.join('-')

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // USING IF STATEMENT
     // IF STRING BEGINS WITH CHAR UPPERCASED 
      if (string.charAt().toUpperCase() === char) {
        // RETURN TRUE 
         return true;
      } // IF STRING BEGINS WITH CHAR LOWERCASED
         else if (string.charAt().toLowerCase() === char) {
            // RETURN TRUE
             return true;
         } // RETURN FALSE OTHERWISE
            else {
                return false;
            }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // USING IF STATEMENT 
     // IF STRING ENDS WITH CHAR UPPERCASED
      if (string.charAt(string.length - 1).toUpperCase() === char) {
        // RETURN TRUE
         return true;
      } // IF STRING ENDS WITH CHAR LOWERCASED 
         else if (string.charAt(string.length - 1).toLowerCase() === char) {
            // RETURN TRUE
             return true;
         } else {
            // RETURN FALSE IF OTHERWISE 
             return false;
         }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // RETURN THE STRINGS CONCATENATED INTO ONE
     return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // TURNING THE ARRAY OF WORDS INTO ONE STRING USING THE JOIN METHOD
     // CREATING VARIABLE
      var a = args.join('');

      // RETURNING JOINED STRING
       return a;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
     // IF THE LENGTH OF STRING ONE IS GREATER THAN THE LENGTH OF STRING TWO
      if (stringOne.length > stringTwo.length) {
        // RETURN STRING ONE
         return stringOne;
      } // IF THE LENGTH OF STRING TWO IS GREATER THAN THE LENGTH OF STRING ONE
         else if (stringTwo.length > stringOne.length) {
            // RETURN STRING TWO
             return stringTwo;
         } else {
            // RETURN STRING ONE AND STRING TWO
             return 'both are equal';
         }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
      // IF THE FIRST IS LOWER THAN THE SECOND
      /*if (stringOne < stringTwo) {
        // RETURN 1
         return 1;
      } // IF THE SECOND IS LOWER THAN THE FIRST
         else if (stringTwo < stringOne) {
            // RETURN -1
             return -1;
         } else {
            // RETURN 0;
             return 0;
         }*/
          // USING LOCALECOMPARE METHOD
           return stringTwo.localeCompare(stringOne); // => THIS WORKS TOO

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
     // IF THE FIRST IS GREATER THAN THE SECOND
      /*if (stringOne > stringTwo) {
        // RETURN 1
         return 1;
      } // IF THE SECOND IS GREATER THAN THE FIRST
         else if (stringTwo > stringOne) {
            // RETURN -1
             return -1;
         } else {
            // RETURN 0;
             return 0;
         }*/
             
             // USING LOCALE COMPARE METHOD 
              return stringOne.localeCompare(stringTwo); // => THIS WORKS TOO

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
