/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 2. IMPLEMENT A FUNCTION DECLARATION CALLED search 
 // TAKES A PARAMTER REPRESENTING AN ARRAY OF animals
  // TAKES A PARAMETER REPRESENTING A STRING, THE NAME OF AN ANIMAL
  function search(array, string) {
    // LOOKS THROUGH THE animals ARRAY, AND RETURNS THE ANIMAL'S OBJECT IF AN ANIMAL WITH THAT NAME EXISTS
     for (var i = 0; i <= array.length - 1; i++) {
        // USING IF STATEMENT TO CHECK IS STRING MATCHES THE NAME IN OBJECT
         if (string === array[i]["name"]) {
            // RETURN THE ANIMALS OBJECT
             return array[i];
         }
     }
     // RETURN NULL IF NO ANIMAL WITH THAT NAME EXISTS
      return null;
  }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. WRITE A FUNCTION DECLARATION CALLED replace
 function replace(array, string, replacement) {
    // USING FOR LOOP TO ACCESS ARRAY
     for (var i = 0; i <= array.length - 1; i++) {
        // IF AN ANIMAL NAME EXISTS WITHIN INDEXD OBJECTS
         if (string === array[i]["name"]) {
            // REPLACE IT'S ENTIRE OBJECT WITH THE REPLACEMENT OBJECT
             return array[i] = replacement;
         }
         // OTHERWISE DO NOTHING
     }
 }


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. WRTIE A FUNCTION DECLARATION CALLED remove
 function remove(array, string) {
    // USING FOR LOOP TO ACCESS ARRAY
     for (var i = 0; i <= array.length - 1; i++) {
        // IF AN ANIMAL WITH THAT NAME EXISTS WITHIN THE animals ARRAY
         if (string === array[i]["name"]) {
            // REMOVE IT 
              return array.splice(array[i], 1);
         }
     }
 }


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. WRITE A FUNCTION DECLARATION CALLED add
 function add(animals, animal) {
    // USING FOR LOOP TO ACCESS ARRAY
     for (var i = 0; i <= animals.length - 1; i++) {
        // IF OBJECT IN ANIMALS HAS A NAME PROPERTY A LENGTH OF 0
         if (animal.name.length > 0 && animal.species.length > 0 && animal.name !== animals[i].name) {
            // ADD THIS NEW OBJECT TO THE animals ARRAY
             animals.push(animal);
         }
         return animals
     }
 }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
