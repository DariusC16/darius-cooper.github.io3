////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(x, y, step) {
   // CREATING VARIABLE
   var arr = [];
   // IF STEP IS NEGATIVE
    if (step < 0) {
      // RETURN ARR
       return arr;
    }
   // IF STEP IS UNDEFINED
    if (step === undefined) {
      // CREATING VARIABLE
        var arr = [];

           // IF X IS LESS THAN WHY 
            if (x < y) {
              // USING FOR LOOP 
               for (var i = x; i <= y; i++) {
                 // PUSH INTO ARRAY
                  arr.push(i); 
               }
            }
        // IF X IS GREATER THAN Y
         if (x > y) {
           // USING FOR LOOP
            for (var i = x; i >= y; i--) {
              // PUSH INTO ARRAY
               arr.push(i);
            }
         }
       return arr;
    } else {
      // IF STEP IS DEFINED
      // IF X IS LESS THAN WHY 
        if (x < y) {
          // USING FOR LOOP 
           for (var i = x; i <= y; i+= step) {
             // PUSH INTO ARRAY
              arr.push(i); 
           }
        }
    // IF X IS GREATER THAN Y
     if (x > y) {
       // USING FOR LOOP
        for (var i = x; i >= y; i+= step) {
          // PUSH INTO ARRAY
           arr.push(i);
        }
     }
   return arr;
    }
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // BASE CASE // 
   // IF ARRAY LENGTH IS FALSEY
   if (!array.length) {
    // RETURN 0
     return 0
  }

 // RECURSION
  return array[0] + sum(array.slice(1));
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array, def=[]) {
   // BASE CASE // 
   // IF ARRAY LENGTH IS FALSEY
   if (!array.length) {
    // RETURN ARRAY
     return def.reverse();
  } else {
    // PUSH LAST INDEX OF ARRAY INTO DEFAULT 
     def.push(array[0]);
  }

 // RECURSION
  return reverseArray(array.slice(1), def)

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // USING REVERSE METHOD
   return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // CREATING VARIABLE
   var list;
   // ASSIGNING VARIABLE NULL
    list = null;

   // USING FOR LOOP BACKWARDS
    for (var i = array.length - 1; i >= 0; i--) {
      // LIST EQUALS OBJECT
    list = { value: array[i], rest: list };
  }
  // RETURNING OBJECT
   return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // CREATING VARIBALE
   var array = [];

   // USING WHILE LOOP
    // IF LIST ISN'T NULL
     while (list !== null) {
      // PUSH LIST PROPERTY INTO ARRAY
       array.push(list.value);

       // LIST EQUALS LIST REST PROPERTY
        list = list.rest;
    }

    // RETURNING ARRAY
     return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  // RETURN OBJECT
   return { value: element, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // IF LIST IS NULL
   if (list === null) {
    // RETURN UNDEFINED;
     return undefined;
   } // IF N IS 0
      else if (n === 0) {
        // RETURN LIST VALUE PROPERTY
         return list.value;
      } else {
        // RECURSION
         return nth(list.rest, n - 1);
      }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val, val2) {
  // IF VALUE IS VALUE 2
   if (val === val2) {
    // RETURN TRUE
     return true;
   }
   // IF VALUE IS AN OBJECT OR BOTH VALUES ARE NULL
    if (typeof val !== 'object' || val === null || val2 === null) {
      // RETURN FALSE
     return false;
    }

    // CREATING KEY VARIABLES
     var key = Object.keys(val);
     var key2 = Object.keys(val2);

     // IF KEY LENGTH IS NOT KEY 2 LENGTH
      if (key.length !== key2.length) {
        // RETURN FALSE
         return false;
      }
      // GETTING TIRED HERE..

      // RETURNING KEY
       // USING ARROW FUNCION
        // USING EVERY FUNCTION
       return key.every(k => deepEqual(val[k], val2[k]));

    
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
