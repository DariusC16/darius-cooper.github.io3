/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 2. CREATING ANIMAL VARIABLE AND ASSGINING IT TO AN EMPTY OBJECT
 var animal = {};
 
 // 3. USING DOT NOTATION GIVE ANIMAL A PROPERTY NAMED species
 // WITH A VALUE OF ANY ANIMAL SPECIES
  animal.species = 'dog';

   // 4. USING BRACKET NOTATION GIVE ANIMAL A PROPERTY CALLED name
   // WIH A VALUE OF YOUR ANIMALS NAME
    animal['name'] = 'Clifford';

    // 5. USING EITHER NOTATION GIVE ANIMAL A PROPERTY CALLED noises
    // WITH A VALUE OF EMPTY ARRAY
     animal['noises'] = [];

     // 6. // PRINT YOUR ANIMAL OBJECT TO THE CONSOLE
      console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. CREATE A VARIABLE NAMED noises AND ASSIGN IT TO AN EMPTY ARRAY
 var noises = [];
 
 // 2. USING BRAKCET NOTATION GIVE noises IT'S FIRST ELEMENT
  // A STRING REPRESENTING A SOUND YOUR ANIMAL MIGHT MAKE
   noises[0] = 'Bark!';

   // 3. USING AN ARRAY FUNCTION ADD ANOTHER NOISE TO THE END OF noises
    noises.push('Woof!');
     // 5. LOOK FOR A FUNCTION THAT WILL PLACE AN ELEMENT AT THE BEGINING OF THE ARRAY
    // 6. ADD AN ELEMENT TO noises USING THIS FUNCTION
     noises.unshift('Grrr!');

     // 7. USING BRACKET SYNTAX AGAIN ADD ANOTHER ELEMENT TO THE END OF noises
      noises[noises.length - 1] = 'ARRH!';

      // 8. CONSOLE LOG THE LENGTH OF noises
       console.log(noises.length);

       // 9. CONSOLE LOG THE LAST ELEMENT IN noises WITHOUT HARD CODING THE INDEX
        console.log(noises[noises.length - 1]);

        // 10. CONSOLE LOG THE WHOLE ARRAY 
         console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. USING BRACKET SYNTAX ASSIGN THE noises PROPERTY ON animal TO OUR NEW noises ARRAY
 animal['noises'] = noises;

 // 2. USING ANY SYNTAX ADD ANOTHER NOISE TO THE noises PROPERTY ON animal
  animal.noises.push('AWOO!', 'RROO!');

  // 3. CONSOLE LOG animal 
   console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * Using brakcet notation, dot notation,or assigning a variable that holds the string property.
 * 
 * 2. What are the different ways of accessing elements on arrays?
 * 
 * Using bracket syntax, or using array methods that'll target specific elements in the array.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. CREATE A VARIABLE NAMED animals AND ASSIGN IT TO AN EMPTY ARRAY
 var animals = [];

 // 2. PUSH OUR animal THAT WE CREATED TO THE animals 
  animals.push(animal);

  // 3. CONSOLE LOG animals
   console.log(animals);

   // 4. CREATE A VARIABLE CALLED duck AND ASSIGN IT TO THE DATA
    var duck = {
      species: 'duck',
      name: 'Jerome',
      noises: ['quack', 'honk', 'sneeze', 'woosh']
    };

    // 5. PUSH duck TO animals
     animals.push(duck);

     // 6. CONSOLE LOG animals 
      console.log(animals);

      /* 7. CREATE TWO MORE ANIMAL OBJECTS EACH WITH A SPECIES, A NAME, 
      AND AT LEAST TWO SOUNDS AND ADD EACH ONE OF THEM TO animals*/
      var snake = {
        species: 'rattlesnake',
        name: 'Jerome',
        noises: ['HISS!', 'SLITTH!']
      };
      animals.push(snake);

      var monkey = {
        species: 'monkey',
        name: 'Goku',
        noises: ['OO-OO!', 'WAAAH!']
      };
      animals.push(monkey);

      // 8. CONSOLE LOG animals AND CONSOLE LOG THE LENGTH OF animals
       console.log(animals);
       console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 2. WRTIE A COMMENT IN YOUR CODE THAT EXPLAINS WHY YOU CHOSE THIS DATA STRUCTURE
 // I chose array, because arrays, can hold a collection of many things rather than independent data.
  
 // 3. CREATE A VARIABLE CALLED friends AND ASSIGN IT THE DATA STRUCTURE THAT YOU CHOSE
  var friends = [];

  /* 5. WRITE A FUNCTION CALLED getRandom THAT TAKES OUR animals ARRAY AND RETURNS A RANDOM index 
   OF THE INPUT ARRAY USING Math.Random */
  function getRandom(array) {
    // RETURNS A RANDOM INDEX OF THE INPUT ARRAY
     return Math.floor(Math.random() * array.length);
  };

  // 6. GET A RANDOM ANIMAL AND ADD ITS name TO friends
  // ASSIGNING VARIABLE TO INVOKED FUNCTION
   var a = getRandom(animals);

   // USING VARIABLE TO ACCESS RANDOM INDEX NUMBERS OF ARRAY
    // CREATING FRIENDS PROPERTY AND ASSINGING IT TO THE FRIENDS VARIABLE
     var b = animals[a].friends = friends;

     // PUSHING NAME PROPERTY IN ANY INDEX OBJECT TO ANY FRIENDS PROPERTY WITHIN ANY INDEX OBJECT
      b.push(animals[a].name);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}