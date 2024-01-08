'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Function takes in an input value and returns it unchanged
 * 
 * @param { Value }: Function takes in any value
 * 
 * @returns { Value }: Function returns input value changed
 * 
 */


function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeof: Function takes in a value. It checks what kind of data type the input value and
 *  returns a string indentifying the data type.
 * 
 * @param { Any Data Type } value: Takes in an input value to identify the data type  
 * @returns { String } value: Returns a string of the data type identified from the value
 * 
 */

function typeOf(value) {
  // RETURN THE TYPE OF VALUE AS A STRING
   // IF VALUE IS NULL
    if (value === null) {
      // RETURN STRING NULL
       return 'null';
    } // IF VALUE IS UNDEFINED
       else if (typeof value === undefined) {
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
module.exports.typeOf = typeOf;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param { Array or Object } collection: The collection over which to iterate.
 * @param { Function } action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
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
module.exports.each = each;

/**
 * first: Function takes an array and number. Returns the elements corresponding with the position number
 * given starting from the front.
 * 
 * @param { Array } array: Takes an array of elements 
 * @param { Number } number: Takes a number 
 * @returns { String or Array } string/array: Returns elements that are in position of the array starting from the front
 */

function first(array, number) {
  // CREATING AN ARRAY
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
           else if (number < array.length) {
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
module.exports.first = first;

/**
 * last: Function takes an array and number. Returns the elements corresponding with the position number
 * given starting from the front.
 * 
 * @param { Array } array: Takes an array of elements
 * @param { Number } number: Takes a number
 * @returns { String or Array } string/array: Returns elements that are in position of the array starting from the back
 */

function last(array, number) {
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
module.exports.last = last;

/**
 * indexOf: Function takes an array of elements and a value matching one of the elements. Returns an index number
 * of the array that has the matching value.
 * 
 * @param { Array } array: Takes an array of string values
 * @param { String } value: Takes a string value
 * @returns { Number } array: Function returns an index number of where value is present in the array
 */

function indexOf(array, value) {
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
module.exports.indexOf = indexOf;

/**
 * containts: Takes an array and a value. Returns a boolean value of true or false if array has
 * an element that matches with value.
 * 
 * @param { Array } array: Takes an array of strings and numbers 
 * @param { Value } value: Takes a value that my be present or absent in the array
 * @returns { Boolean } array: Returns true or false after checking inside a new array list
 */

function contains(array, value) {
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
module.exports.contains = contains;

/**
 * unique: Function takes an array of repeating elements inside. Returns a new array of the
 * all elements with none repeating.
 * 
 * @param { Array } array: Takes an array of of reapeating elements
 * @returns { Array } array: Returns a new array of all elements none repeating
 */

function unique(array) {
   // USING indexOf FUNCTION TO RETURN ARRAY WITH NO DUPLICATES
     // ASSIGNING VARIABLE
     var a = this.indexOf(array);

     // RETURN ARRAY SORTED WITH NO DUPLICATES
     return a;
}
module.exports.unique = unique;

/**
 * filter: Function takes an array and callback function. Returns a new array of numbers that are only even.
 * 
 * @param { Array } array: Takes an array of numbers
 * @param { Function } func: Takes a function deciding if numbers divded by 2 are equal to 0
 * @returns { Array } array: Returns a new list of numbers that are even
 */

function filter(array, func) {
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
module.exports.filter = filter;

/**
 * reject: Function takes an array and callback function. Returns a new array of numbers that are only odd
 * 
 * @param { Array } array: Takes an array of numbers
 * @param { Function } func: Takes a function deciding if numbers divded by 2 are equal to 0 
 * @returns { Array } array: Returns a new array that holds odd numbers
 */

function reject(array, func) {
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
 module.exports.reject = reject;

 /**
  * partition: Function takes an array and a callback function. Returns a nested array of
  * numbers seperating elements that are even and odd.
  * 
  * @param { Array } array: Takes an array of numbers 
  * @param { Function } func: Takes a function checking if numbers in the array are equal to 0
  * @returns { Array } array: Returns a new array of 2 sub arrays that seperate odd and even numbers
  */

 function partition(array, func) {
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
module.exports.partition = partition;

/**
 * map: Function takes in a collection and callback function. It returns a new array of the result of
 * invoking the callback on each item in collection.
 * 
 * @param { Array or Object } collection: Function takes in an array or an object
 * @param { Function } func: Function take in an input function to be applied to each value in the collection 
 * @returns { Array } collection: Function returns an array made up of the return values from calling the input function...
 * 
 */

function map(collection, func) {
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
module.exports.map = map;

/**
 * pluck: Function takes an array of objects and property. Returns an array of property values
 * targeted in the objects within the array.
 * 
 * @param { Array } array: Takes an array of objects
 * @param { String } property: Takes a string value that could be within the object elements, inside the array
 * @returns { Array } array: Returns an array of the property values that were within the objects
 */

function pluck(array, property) {
   // USING MAP FUNCTION 
   var a = array.map(function(item) {
      // NOW LOOPING THROUGH ARRAY OF OBJECTS
       // RETURN EVERY ELEMENT IN ARRAY WITH PROPERTY VALUE
        return item[property];
      })

      // RETURN AN ARRAY CONTAINING THE VALUE OF PROPERTY FOR EVERY ELEMENT
       return a;
   
}
module.exports.pluck = pluck;

/**
 * every: Function takes a collection of an arry/object and callback function. Returns a 
 * boolean value of true or false.
 * 
 * @param { Array or Object } collection: Takes a collection of an array/object  
 * @param { Function } func: Takes a callback function checking all number elements are equal to 0
 * @returns { Boolean } boolean: Returns a boolean value of true or false if all number elements are equal to 0 or not
 */

function every(collection, func) {
  // IF COLLECTION IS AN ARRAY
   if (Array.isArray(collection)) {
     // IF FUNCTION ISN'T PROVIDED
      if (func === undefined) {
         // LOOPING THROUGH ARRAY
          for (var i = 0; i <= collection.length - 1; i++) {
             // IF EVERY ELEMENT IS TRUE 
              if (!collection[i]) {
                 // RETURN TRUE
                  return false;
              } else {
                 // RETURN FALSE OTHERWISE
                  return true;
              }
          }
      } else {
        // IF FUNCTION IS PROVIDED 
         // LOOPING THROUGH ARRAY
          for (var i = 0; i <= collection.length - 1; i++) {
             // CALL FUNCTION FOR EVERY ELEMENT OF COLLECTION WITH THE PARAMETERS
              // CURRENT ELEMENT, IT'S INDEX, AND COLLECTION
               // IF STATEMENT
                if (!func(collection[i], i, collection)) {
                 // RETURN TRUE
                  return false;
                 }
             }
         }
     
     } // IF COLLECTION IS OBJECT
        else {
         // IF FUNCTION ISN'T PROVIDED
          if (func === undefined) {
             // LOOPING THROUGH OBJECT 
              for (var key in collection) {
                 // IF EVERY KEY IS TRUE
                  if (!collection[key]) {
                     // RETURN TRUE
                      return false;
                  } else {
                     // RETURN FALSE OTHERWISE
                      return true;
                  }
              }
          } else {
             // IF FUNCTION IS PROVIDED
              // LOOPING THROUGH OBJECT
               for (var key in collection) {
                 // CURRENT VALUE, CURRENT KEY, COLLECTION
                  // IF STATEMENT
                   if (!func(collection[key], key, collection)) {
                     // RETURN TRUE
                      return false;
                     }
                 }
             }
         }

         // RETURN FALSE OTEHRWSIE
          return true;

          /* I had to swith all my true and false placements, as I only had
           1 test that wasn't passing before I did so. It was the
            "Should return false when all iterations are not true." */

}
module.exports.every = every;

/**
 * some: Function takes a collection of an array/object and callback function. Returns a boolean
 * value of true or false.
 * 
 * @param { Array or Object } collection: Takes a collection of an array/object
 * @param { Function } func: Takes a callback function checking all number elements are equal to 0
 * @returns { Boolean } boolean: Returns a boolean value of true or false if some number elements are equal to 0 or not
 */

function some(collection, func) {
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
module.exports.some = some;

/**
 * reduce: Function takes an array, callback function, and a seed. Returns a single value
 * after iterating through array elements in order.
 * 
 * @param { Array } array: Takes an array of number elements 
 * @param { Function } func: Takes a callback function that adds the current previous sum with the current value
 * @param { Any Data Type } seed: Takes a data type to hold data dependent on the on the target data type 
 * @returns { Number } number: Returns a single number value sum of all number elements
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
module.exports.reduce = reduce;

/**
 * extend: Function takes a object, another object, and more objects
 * 
 * @param { Object } object: Takes an object of properties and values
 * @param { Object } object2: Takes an object of properties and values 
 * @param { Object } moreObj  Takes more objects of properties and values
 * @returns { Object } object: Returns an object with properties and values taken from others 
 * and copied into one single object
 */

function extend(object, object2, moreObj) {
   // COPY PROPERTIES FROM OBJECT 2 TO OBJECT 1
    // USING OBJECT ASSGIN METHOD
    var a = Object.assign(object, object2, moreObj);

    // RETURNING NEW OBJECT
     return a;
}
module.exports.extend = extend;



