// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/ 
_.identity = function(value) {
    // RETURN VALUE UNCHANGED
     return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // RETURN THE TYPE OF VALUE AS A STRING
     // IF VALUE IS NULL
      if (value === null) {
        // RETURN STRING NULL
         return 'null';
      } // IF VALUE IS UNDEFINED
         else if (typeof value === 'undefined') {
            // RETURN STRING UNDEFINED
             return 'undefined';
         } // IF VALUE IS A STRING
            else if (typeof value === 'string') {
                // RETURN STRING
                 return 'string';
            } // IF VALUE IS AN ARRAY
               else if (Array.isArray(value)) {
                // RETURN STRING ARRAY
                 return 'array';
               } // IF VALUE IS AN OBJECT
                  else if (typeof value === 'object') {
                    // RETURN STRING OBJECT
                     return 'object';
                  } // IF VALUE IS AN A NUMBER 
                     else if (typeof value  === 'number') {
                        // RETURN STRING NUMBER
                         return 'number';
                     } // IF VALUE IS A BOOLEAN
                        else if (typeof value === 'boolean') {
                            // RETURN STRING BOOLEAN
                             return 'boolean';
                        } else {
                            // RETURN FUNCTION
                             return 'function';
                        }
} 

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number) {
    // CREATING AN EMPRTY ARRAY
     var a = [];

     // USING IF STATEMENT
      // IF ARRAY IS NOT AN ARRAY
       if (!Array.isArray(array)) {
         // RETURN EMPTY LIST
          return a;
       } // IF NUMBER IS NOT A NUMBER
          else if (typeof number !== 'number') {
            // RETURN THE FIRST ELEMENT IN ARRAY
             return array[0];
          } // IF NUMBER IS LOWER THAN ARRAY LENGTH
             else if (number < 0) {
               // RETURN EMPTY LIST
                return a;
               } // IF NUMBER IS HIGHER THAN ARRAY LENGTH
                  else if (number > array.length) {
                     // RETURN WHOLE ARRAY
                      return array;
                     } else {
                        // USING SLICE METHOD TO CREATE COPY OF ARRAY
                        return array.slice(0, number);
                     }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
   // CREATING AN EMPTY ARRAY
    var a = [];

    // USING IF STATEMENT
     // IF ARRAY IS NOT AN ARRAY
      if (!Array.isArray(array)) {
         // RETURN AN EMPTY LIST
          return a;
      } // IF NUMBER IS NOT A NUMBER OR NO NUMBER IS GIVEN
         else if (typeof number !== 'number' || !number) {
            // RETURN THE LAST ELEMENT OF ARRAY
             return array[array.length - 1];
         } // IF NUMBER IS LOWER THAN ARRAY LENGTH
            else if (number < 0) {
               // RETURN AN EMPTY LIST
                return a;
            } // IF NUMBER IS GREATER THAN ARRAY LENGTH 
               else if (number > array.length) {
                  // RETURN THE WHOLE ARRAY
                   return array;
               } // IF ALL FAILS USE FOR LOOP BACKWARDS
                  else {
                     // LOOPING BACKWARDS
                      for (var i = number; i > 0; i--) {
                        // PUSH ELEMENTS INTO ARRAY LIST
                         a.push(array[i]);
                         // USING REVERSE METHOD ON ARRAY LIST
                          a.reverse();
                      }
                      // RETURNING ARRAY LIST OUTSIDE OF FOR LOOP
                       return a;
                     }
    
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/ 

_.indexOf = function(array, value) {
   // DECLARING VARIABLE => The .search() method works as well
    // USING JOIN METHOD TO TURN ARRAY OF STRINGS INTO A STRING
    /*var a = array.join('');

   return a.search(value); // => Will return -1 if value isn't found
   */
      // Code below works too

      // CREATING OUTPUT ARRAY
       var output = [];

       // USING FOR LOOP TO ACCESS ARRAY
        for (var i = 0; i <= array.length - 1; i++) {
         // USING IF STATEMENT TO FILTER OUT REPEATING ELEMENTS
          // IF OUTPUT DOESN'T HAVE ARRAY ELEMENT
           if (!output.includes(array[i])) {
            // PUSH ELEMENT INTO OUTPUT ARRAY
             output.push(array[i]);
           }
        }
        // IF VALUE IS GIVEN
         if (value) {
            // USING FOR LOOP AGAIN TO LOOP THROUGH ARRAY OUTPUT
             for (var i = 0; i <= output.length - 1; i++) {
               // IF OUTPUT ELEMENT MATCHES VALUE 
                if (output[i] === value) {
                  // RETURN INDEX
                   return i;
                  }
               }
               // RETURN -1 IF OTHERWISE
                return -1;
               } // IF VALUE ISN'T GIVEN
                  else {
                     // RETURN OUTPUT ARRAY
                      return output;
                     }
        
    
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
   // USING FOR LOOP
    for (var i = 0; i <= array.length - 1; i++) {
      // IF ARRAY ELEMENT IS VALUE 
       if (array[i] === value) {
         // RETURN TRUE
          return true;
       }
    }
    // RETURN FALSE
     return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    // IF COLLECTION IS AN ARRAY
     if (Array.isArray(collection)) {
      // USING FOR LOOP TO ACCESS ARRAY
       for (var i = 0; i <= collection.length - 1; i++) {
         // CALL FUNCTION ONCE FOR EACH ELEMENT WITH THE ARGUMENTS 
          // THE ELEMENT, IT'S INDEX, AND COLLECTION
           func(collection[i], i, collection);
       }
     } // IF COLLECTION IS AN OBJECT
        else {
         // USING FOR IN LOOP
          for (var key in collection) {
            // CALL FUNCTION ONCE FOR EACH PROPERTY WITH THE ARGUMENTS
             // THE VALUE, KEY, COLLECTION
              func(collection[key], key, collection);
          }
        }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    // USING indexOf FUNCTION TO RETURN ARRAY WITH NO DUPLICATES
     // ASSIGNING VARIABLE
      var a = this.indexOf(array);

      // RETURN ARRAY SORTED WITH NO DUPLICATES
      return a;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
   // CREATING OUTPUT ARRAY
    var output = [];
   // USING each FUNCTION 
    // ASSIGNING VARIABLE
     /*var a = this.each(array, func);

     // USING IF STATEMENT
      // IF CALLING FUNCTION RETURNED TRUTHY
       if (func) {
         // RETURN A NEW ARRAY OF ELEMENTS
         output.push(a);
       }
       return output;*/

       // NEW CODE
        // USING FOR LOOP TO ACCESS ARRAY
         for (var i = 0; i <= array.length - 1; i++) {
            // CALL FUNCTION FOR EACH ELEMENT IN ARRAY PASSING THE ARGUMENTS
             // THE ELEMENT, THE INDEX, AND THE ARRAY
              var result = func(array[i], i, array)
            // IF CALLING FUNCTION RETURNED TRUE
             if (result) {
               // PUSH ELEMENTS INTO OUTPUT ARRAY
                output.push(array[i]);
             }
         }
         // RETURN A NEW ARRAY OF ELEMENTS
          return output;
       
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
   // CREATING OUTPUT ARRAY 
    var output = []; 

    // USING FOR LOOP TO ACCESS ARRAY
     for (var i = 0; i <= array.length - 1; i++) {
      // CALL FUNCTION FOR EACH ELEMENT IN ARRAY PASSING THE ARGUMENTS
       // THE ELEMENT, IT'S INDEX, AND THE ARRAY
        var result = func(array[i], i, array);

        // IF CALLING FUNCTION IS FALSEY
         if (!result) {
            // PUSH ARRAY ELEMENTS INTO OUTPUT ARRAY
             output.push(array[i]);
         }
     }
     // RETURN NEW ARRAY OF ELEMENTS
      return output;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
   // CREATING OUTPUT ARRAY WITH 2 SUB ARRAYS
    var output = [];
    var array1 = [];
    var array2 = [];

    // USING FOR LOOP TO ACCESS ARRAY
     for (var i = 0; i <= array.length - 1; i++) {
      // CALL FUNCTION FOR EACH ELEMENT IN ARRAY PASSING IT TO THE ARGUMENTS
       // THE ELEMENT, THE INDEX, THE ARRAY
        var result = func(array[i], i, array);

        // IF FUNCTION CALL RETURNED SOMETHING TRUTHY
         if (result) {
            // PUSH ARRAY ELEMENTS INTO FIRST SUB ARRAY
             array1.push(array[i]);
         }
         // IF FUNCTION CALL RETURNED SOMETHING FALSEY
          if (!result) {
            // PUSH ARRAY ELEMENTS INTO SECOND SUB ARRAY
             array2.push(array[i]);
          }
     }
     // PUSHING BOTH SUB ARRAYS INTO OUTPUT ARRAY
      output.push(array2);
      output.unshift(array1);

      // RETURNING NEW ARRAY OF 2 SUB ARRAYS
       return output;
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
   // CREATING OUTPUT ARRAY
    var output = [];
   // IF COLLECTION IS AN ARRAY 
    if (Array.isArray(collection)) {
      // USING FOR LOOP TO ACCESS ARRAY
       for (var i = 0; i <= collection.length - 1; i++) {
         // CALL FUNCTION FOR EACH ELEMENT IN COLLECTION
          // THE ELEMENT, IT'S INDEX, AND COLLECTION
           var result = func(collection[i], i, collection);
           output.push(result);
       }
    } else {
      // IF COLLECTION IS AN OBJECT 
       // USING FOR IN LOOP 
        for (var key in collection) {
         // CALL FUNCTION FOR EACH ELEMENT IN COLLECTION
          // THE VALUE, IT'S KEY, AND COLLECTION
           var result = func(collection[key], key, collection);
           output.push(result);
        }
    }
    

     // SAVE THE RETURN VALUE OF EACH FUNCTION CALL IN A NEW ARRAY
      // RETURN THE NEW ARRAY
       return output;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
   // USING MAP FUNCTION 
    var a = array.map(function(item) {
      // NOW LOOPING THROUGH ARRAY OF OBJECTS
       // RETURN EVERY ELEMENT IN ARRAY WITH PROPERTY VALUE
        return item[property];
      })

      // RETURN AN ARRAY CONTAINING THE VALUE OF PROPERTY FOR EVERY ELEMENT
       return a;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func) {
   // CREATING OUTPUT ARRAY
    var output = [];

    // IF FUNCTION IS UNDEFINED
   if (func === undefined) {
      // DETERMINE IF COLLECTION IS AN ARRAY
       if (Array.isArray(collection)) {
         // USING FOR LOOP TO ACCESS ARRAY
          for (var i = 0; i <= collection.length - 1; i++) {
            // USING IF STATEMENT TO DETERMINE IF ELEMENT IS FALSEY 
             if (!collection[i]) {
               // RETURN FALSE
                return false;
             }
          }
       } else {
         // IF COLLECTION IS AN OBJECT
          // USING FOR IN LOOP 
           for (var key in collection) {
            // USING IF STATEMENT TO DETERMINE IF KEY VALUE IS FALSEY
             if (!collection[key]) {
               // RETURN FALSE
                return false;
             }
           }
       }
   } // IF FUNCTION WAS PROVIDED
      else {
         // IF COLLECTION IS AN ARRAY
          if (Array.isArray(collection)) {
            // USING FOR LOOP TO ACCESS ARRAY
             for (var i = 0; i <= collection.length - 1; i++) {
               // USING IF STATMENT TO CHECK IF FUNCTION CALL IS FALSEY
                if (!func(collection[i], i, collection)) {
                  // RETURN FALSE 
                   return false;
                }
             }
          } // IF COLLECTION IS AN OBJECT 
             else {
               // USING FOR IN LOOP TO ACCESS OBJECT
                for (var key in collection) {
                  // USING IF STATMENT TO CHECK IF FUNCTION CALL IS FALSEY
                   if (!func(collection[key], key, collection)) {
                     // RETURN FALSE
                      return false;
                   }
                }
             }
      }
      // RETURN TRUE IF ALL FAILS
       return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func) {
   // IF FUNCTION IS NOT GIVEN 
    if (!func) {
      // IF COLLECTION IS AN ARRAY
       if (Array.isArray(collection)) {
         // USING FOR LOOP
          for (var i = 0; i <= collection.length - 1; i++) {
            // IF ELEMENTS IN COLLECTION IS TRUTHY
             if (collection[i]) {
               // RETURN TRUE
                return true;
             }
          }
       } // IF COLLECTION IS AN OBJECT
          else {
            // USING FOR IN LOOP 
             for (var key in collection) {
               // IF KEY VALUE IN COLLECTION IS TRUTHY 
                if (collection[key]) {
                  // RETURN TRUE
                   return true;
                }
             }
          }
    } // IF FUNCTION IS GIVEN
       else {
         // IF COLLECTION IS ARRAY
          if (Array.isArray(collection)) {
            // USING FOR LOOP 
             for (var i = 0; i <= collection.length - 1; i++) {
               // CALL FUNCTION FOR EVERY ELEMENT OF COLLECTION
                // ELEMENT, INDEX, COLLECTION
                 var result = func(collection[i], i, collection);

                 // IF FUNCTION CALL IS TRUTHY
                  if (result) {
                     // RETURN TRUE
                      return true;
                  }
             }
          } // IF COLLECTION IS OBJECT
             else {
               // USING FOR IN LOOP 
                for (var key in collection) {
                  // CALLING FUNCTION FOR EVERY KEY VALUE OF COLLECTION
                   // VALUE, KEY, COLLECTION
                    var result = func(collection[key], key, collection)

                    // IF FUNCTION CALL IS TRUTHY 
                     if (result) {
                        // RETURN TRUE
                         return true;
                     }
                }
             }
       }
       // RETURN FALSE 
        return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
   var result;
   // IF NO SEED WAS GIVEN
    if (seed === undefined) {
      // USE THE FIRST ELEMENT VALUE OF COLLECTION AS SEED AND CONTINUE TO THE NEXT ELEMENT
       result = array[0];

       // USING FOR LOOP
        for (var i = 1; i <= array.length - 1; i++) {
         // CALL FUNCTION FOR EVERY ELEMENT IN COLLECTION PASSING THE ARGUMENTS
          // PREVIOUS RESULT, ELEMENT, INDEX
           result = func(result, array[i], i);   
        }
    } // IF THERE IS A SEED VALUE 
       else {
         // RESULT IS SEED
          result = seed;

          // USING FOR LOOP 
           for (var i = 0; i <= array.length - 1; i++) {
            // CALL FUNCTION FOR EVERY ELEMENT IN COLLECTION PASSING THE ARGUMENTS
             // PREVIOUS RESULT, ELEMENT, INDEX
              result = func(result, array[i], i);
           }

       }
       return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object, object2, moreObj) {
   // COPY PROPERTIES FROM OBJECT 2 TO OBJECT 1
    // USING OBJECT ASSGIN METHOD
     var a = Object.assign(object, object2, moreObj);

     // RETURNING NEW OBJECT
      return a;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
