//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // SHOULD TAKE AN OBJECT AND RETURN ITS VALUES IN AN ARRAY
     return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // SHOULD TAKE AN OBJECT AND RETURN ALL IT'S KEYS IN A STRING EACH SEPERATED WITH A SPACE
     // USING OBJECT KEYS METHOD TO CREATE AN ARRAY OF OBJECT KEYS 
      var a = Object.keys(object);
      //console.log(a);
      // USING THE JOIN METHOD TO TURN THE ARRAY INTO A STRING
       var b = a.join(' ');
       //console.log(b);

    // RETURNING STRING
     return b;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // SHOULD TAKE AN OBJECT AND RETURN ALL IT'S VALUES IN A STRING EACH SEPERATED WITH A SPACE
     // USING FOR IN LOOP TO TEST DIFFERENT WAY OF OBTAINING SOLUTION
      var output = [];

      for (var key in object) {
        // USING IF STATEMENT
         // IF DATATYPE OF KEY VALUES IS A STRING
         if (typeof object[key] === 'string') {
          // PUSH INTO OUTPUT ARRAY
           output.push(object[key]);
         }
      }
      // USING JOIN METHOD TO JOIN STRINGS OF ARRAYS TOGETHER
       var a = output.join(' ');

      // RETURNING STRING
       return a;
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  // SHOULD RETURN ARRAY IF IT'S AN ARRAY AND OBJECT IF ITS AN OBJECT 
   // USING IF STATEMENT 
    // IF COLLECTION IS AN ARRAY
     if (Array.isArray(collection)) {
      // RETURN STRING ARRAY
       return 'array';
      } // IF COLLECTION IS AN OBJECT 
         else if (typeof collection === 'object') {
          // RETURN STRING OBJECT
           return 'object';
          } else {
            return collection;
          }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  // SHOULD TAKE A STRING OF ONE WORD AND RETURN THE STRING WITH IT'S FIRST LETTER CAPITALIZED
   return string.charAt(0).toUpperCase() + string.slice(1);
   
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  // USING TO LOWERCASE METHOD TO TURN AND CHARACTERS LOWERCASE
   // USING SPLIT METHOD TO TURN STRING INTO AN ARRAY OF ELEMENTS
    var a = string.toLowerCase().split(' ');

    // USING FOR LOOP TO ACCESS ARRAY
     for (var i = 0; i <= a.length - 1; i++) {
      // ASSIGNING ARRAY ELEMENTS TO ITSELF 
       // 
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }
  // SELF NOTE: CODE WORKS FOR ONE WORD AND MULTIPLE WORDS

  return a.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  // SHOULD TAKE AN OBJECT WITH A NAME PROPERTY AND RETURN 'WELCOME <NAME>!'
   // ACCESSING NAME PROPERTY IN OBJECT TO UPPER CASE THE FIRST LETTER OF STRING VALUE
    var name = object["name"].charAt().toUpperCase() + object["name"].slice(1);

    // RETURNING WELCOME MESSAGE
     return "Welcome" + " " + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  // SHOULD TAKE AN OBJECT WITH A NAME AND SPECIES AND RETURN <NAME> IS A <SPECIES>
   // ACCESSING NAME PROPERTY IN OBJECT TO UPPER CASE FIRST LETTER ONLY
    var name = object["name"].charAt().toUpperCase() + object["name"].slice(1);
    
    // ACCESSING SPECIES PROPERTY IN OBJECT TO UPPER CASE FIRST LETTER ONLY
     var species = object["species"].charAt().toUpperCase() + object["species"].slice(1);

     // RETURNING MESSAGE
      return name + " is a " + species; 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  // IF OBJECT DOESNT HAVE A NOISES PROPERTY
   if (!object["noises"]) {
    // RETURN THERE ARE NOISES
     return "there are no noises";
   } // IF NOISES HAS AN EMPTY ARRAY
      else if (object["noises"].length === 0) {
        // RETURN THERE ARE NO NOISES
         return "there are no noises";
      } else {
        return object["noises"].join(" ");
      }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  // SHOULD TAKE A STRING OF WORDS AND A WORD AND RETURN TRUE IF THE WORD IS IN THE STRING
   // IF WORD IS IN THE STRING
    if (string.includes(word)) {
      // RETURN TRUE 
       return true;
      } else {
        return false
      }


}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  /* SHOULD TAKE A NAME AND OBJECT AND ADD THE NAME TO THE OBJECT'S FRIENDS ARRAY
   THEN RETURN THE OBJECT */
   // ACCESSING OBJECT'S FRIENDS ARRAY
    // PUSHING NAME INTO ARRAY
     object["friends"].push(name);

     // RETURNING OBJECT
     return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  // SHOULD TAKE A NAME AND AN OBJECT RETURN TRUE IF NAME IS A FRIEND OF OBJECT
   // ACCESSING FRIENDS ARRAY IN OBJECT
   // IF OBJECT HAS NO FRIENDS PROPERTY
    if (!object["friends"]) {
      // RETURN FALSE
       return false;
    } // IF NAME IS IN FRIENDS ARRAY PROPERTY 
       else if (object["friends"].includes(name)) {
        // RETURN TRUE
         return true;
        }
        return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  // SHOULD TAKE A NAME AND A LIST OF PEOPLE AND RETURN A LIST OF ALL THE NAMES THAT <NAME> IS NOT FRIENDS WITH
    // CREATING AN ARRAY TO PUSH NAMES IN 
    var a = [];
    // ACCESSING ARRAY OF OBJECTS
     // USING FOR LOOP 
      for (var i = 0; i <= array.length - 1; i++) {
       // USING IF STATEMENT
        // CHECKING FOR NAMES THAT AREN'T PRESENT
         // IF FRIENDS ARRAY INCLUDES NAME
          if (!array[i]["friends"].includes(name)) {
           // PUSH NAME PROPERTY INTO ARRAY
            a.push(array[i]["name"]); // => array is filled with name parameter and people that aren't friends 
          }
      }
      // CREATING WAY TO FILTER OUT THE NAME PARAMETER FROM ARRAY WITHOUT HARD CODING
      // USING INDEX OF TO GIVE A SPECIFIED POSTION OF NAME
    var b = a.indexOf(name);
    console.log(b);// => logs index position number
    
    // IF INDEX POSITION IS GREATER THAN -1
    if (b > -1) {
      // USE SPLICE METHOD TO REMOVE THE SEPCIFIC INDEX
      a.splice(b, 1);
    }
    //console.log(a)
  return a;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  // SHOULD TAKE AN OBJECT, A KEY, AND VALUE
   // SHOULD UPDATE THE PROPERTY KEY ON OBJECT WITH A NEW VALUE 
    // IF KEY DOESN'T EXIST IN OBJECT
     if (!object[key]) {
      // CREATE IT 
       object[key] = value;
     } // IF KEY EXISTS IN OBJECT
        if (object[key]) {
          // UPDATE IT
           object[key] = value;
        }
        return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  // SHOULD TAKE AN OBJECT AND AN ARRAY OF STRINGS
   // SHOULD REMOVE ANY PROPERTIES ON OBJECT THAT ARE LISTED IN ARRAY
    // USING FOR IN LOOP TO ACCESS OBJECT 
     for (var key in object) {
      // IF ARRAY INCLUDES KEY IN OBJECT
       if (array.includes(key)) {
        // REMOVE THE KEY FROM OBJECT
         delete object[key];
       }
     } 
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  // CREATING ARRAY VARIABLE
   var output = [];
   // USING FOR LOOP TO ACCESS ARRAY
    for (var i = 0; i <= array.length - 1; i++) {
      // IF OUTPUT DOESN'T ALREADY INCLUDE ARRAY ELEMENT
       if (!output.includes(array[i])) {
        // PUSH INTO OUTPUT
         output.push(array[i]);
       }
    }
    return output;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}