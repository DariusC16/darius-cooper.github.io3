// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // RETURNS A CONTACT OBJECT 
     // CREATING OBJECT 
      var contact = {};

      contact['id'] = id;
      contact['nameFirst'] = nameFirst;
      contact['nameLast'] = nameLast;

      return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // 2. addContact function:()//
        addContact: function(contact) {
            // TAKES A CONTACT OBJECT TO BE ADDED TO THE CONTACT LIST
             return contacts.push(contact);
        }, 
        /* 3. findContact(fullName) takes a full-name String, like 'Max Gaudin', and 
           returns the contact object if found in the contacts-list, or, 
                undefined if the fullName does not match any contacts in the list. */
                findContact: function(fullname) {
                    // ACCESSING ARRAY OF CONTACT OBJECTS 
                     for (var i = 0; i <= contacts.length - 1; i++) {
                        // IF FULLNAME IS FOUND IN THE CONTACTS LIST
                         if (fullname === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                            // RETURN THE CONTACT OBJECT
                             return contacts[i];
                        } // OR UNDEFINED IF THE FULLNAME DOES NOT MATCH ANY
                           return undefined;
                    }
                }, // 4. TAKES A CONTACT OBJECT TO BE REMOVED FROM THE CONTACTS LIST
                    removeContact: function(contact) {
                        // USING SPLICE METHOD TO DELETE CONTACT FROM CONTACTS LIST 
                         return contacts.splice(contact, 1);
                    }, /* 5. SHOULD RETURN A STRING FORMATED WITH ALL THE FULL NAMES
                     OF THE SEPERATED WITH A LINEBREAK */
                     printAllContactNames: function() {
                        // CREATING VARIABLE
                         var a = [];

                         // USING FOR LOOP TO ACCESS CONTACTS LIST 
                          for (var i = 0; i <= contacts.length - 1; i++) {
                            // RETURN STRING WITH ALL FULL NAMES FORMATTED
                             a.push(contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]);
                          }
                          // RETURNING ARRAY USING JOIN METHOD
                           return a.join('\n');
                     }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
