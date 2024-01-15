// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require(/* Replace this with the name of your lodown! */);

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
      // FIND THE NUMBER OF MALE CUSTOMERS
     // USING FILTER METHOD
     var a = array.filter(function (obj) {
      // NOW LOOPING THROUGH ARRAY
       // RETURN OBJ MALE PROPERTY IF TRUE
       return obj.gender === 'male';
    });
//console.log(a);
// USING LEGNTH PROPERTY TO COUNT THE NUMBER OF MALES IN OBJECT
 var count = a.length
 //console.log(count);
 return count;
};

var femaleCount = function(array) {
  // FIND THE NUMBER OF FEMALE CUSTOMERS
   // USING REDUCE METHOD
    var a = array.reduce(function(acc, curr) {
      // NOW LOOPING THROUGH ARRAY
       // IF CURRENT OBJECT HAS A FEMALE KEY VALUE
        if (curr["gender"] === "female") {
          // ADD 1 TO ACC
           acc += 1;
        }
        return acc;
    }, 0)
    // RETURN NUMBER
    return a;
};

var oldestCustomer = function(array) {
   // FIND THE OLDEST CUSTOMERS NAME
   // USING REDUCE METHOD
   var a = array.reduce(function(acc, curr) {
    // NOW LOOPING THROUGH ARRAY
     // IF CURRENT AGE IS GREATER THAN AGE IN FIRST ELEMENT
    if (curr.age > array[0].age) {
        // ASSIGN ACCUMULATOR TO CURRENT OBJECT NAME
         acc = curr.name;
      }
    // RETURN ACCUMULATOR
    return acc;
  }, '');

return a;
};

var youngestCustomer = function(array) {
   // FIND THE YOUNGEST CUSTOMERS NAME
   // USING REDUCE METHOD
   var a = array.reduce(function(acc, curr) {
    // NOW LOOPING THROUGH ARRAY
     // IF CURRENT AGE IS LESS THAN THAN AGE IN FIRST ELEMENT
    if (curr.age <= 22) {
        // ASSIGN ACCUMULATOR TO CURRENT OBJECT NAME
         acc = curr.name;
      }
    // RETURN ACCUMULATOR
    return acc;
  }, '');

return a;
};

var averageBalance = function(array) {
  // FIND THE AVERAGE BALANCE OF ALL CUSTOMERS
   // USING MAP METHOD
   var a = array.map(function(money) {
    // NOW LOOPING THROUGH THE ARRAY
    // USING .replace() METHOD
     var b = money.balance.replace(/,/g, '');
    return b.replace(/\$/g, '');
  })
 //console.log(a);
 // USING REDUCE METHOD
  var sum = a.reduce(function(acc, curr) {
    // NOW LOOPING THROUGH ARRAY
     // USING NUMBER METHOD TO TURN STRINGS INTO NUMBERS
     return acc += Number(curr);
  }, 0)
// RETURNING THE SUM DIVDED BY 8
 return sum/8; 
}

var firstLetterCount = function(array, letter) {
  // FIND HOW MANY CUSTOMERS NAMES BEGINS WITH A GIVEN LETTER
    // USING FILTER METHOD 
    var a = array.filter(function(person) {
      // NOW LOOPING THROUGH ARRAY
       return person["name"].charAt() === letter
    })
  // RETURNING NUMBER OF NAMES
  return a.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
  // HOW MANY FRIENDS OF A GIVEN CUSTOMER HAVE NAMES THAT START WITH A GIVEN LETTER
    // USING FILTER METHOD
   //console.log(array[0].friends)
   var a = array.filter(function(person) {
    // NOW LOOPING THROUGH ARRAY
     // IF OBJECT NAME PROPERTY IS THE CUSTOMER
      return person["name"] === customer;
  })
//console.log(a);
// USING FILTER METHOD AGAIN
 var friendsArray = a[0]["friends"].filter(function(string) {
   // NOW LOOPING THROUGH ARRAY AGAIN
    // IF OBJECT NAME PROPERTY VALUE HAS A STRING THAT STARTS WITH LETTER
     return string["name"].charAt() === letter;
 })
// RETURNING LENGTH OF THE ARRAY
 return friendsArray.length;
};

var friendsCount = function(array, name) {
   // FIND THE CUSTOMERS NAMES THAT HAVE GIVEN A CUSTOMERS NAME IN THEIR FRIENDS LIST
  var output = [];
  // USING FOR LOOP
    for (var i = 0; i <= array.length - 1; i++) {
        // USING FOR LOOP AGAIN
         for (var j = 0; j <= array[i]["friends"].length - 1; j++) {
           // IF NAME PROPERTY IN OBJECT MATCHES NAME
            if (array[i]["friends"][j]["name"] === name) {
              // PUSH ARRAY ELEMENT NAME INTO OUTPUT
               output.push(array[i]["name"]);
            }  
         }
    }
 //console.log(a);
 // RETURNING ARRAY
  return output;
};

var topThreeTags = function(array) {
  // FIND THE THREE MOST COMMON TAGS AMONG ALL CUSTOMERS; ASSOCIATED TAGS
   
};

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
