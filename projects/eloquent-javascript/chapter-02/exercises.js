
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  // USING FOR LOOP 
  // var string = '#';
  
  for (var string = '#'; string.length <= num; string+='#') {
    // CONSOLE LOG STRING
     console.log(string);
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num, end) {
  // CREATING FOR LOOP
   for (var i = num; i <= end; i++) {
    // IF NUMBER DIVIDED BY 3 AND 5 IS 0
     if (i % 3 === 0 && i % 5 === 0) {
      // CONSOLE LOG  FIZZBUZZ
       console.log('fizzbuzz');
    } // IF NUMBER IS DIVIDED BY 3 
       else if (i % 3 === 0) {
        // CONSOLE LOG FIZZ
         console.log('fizz');
        } // IF NUMBER IS DIVDED BY 5 
        else if (i % 5 === 0) {
          // CONSOLE LOG BUZZ
           console.log('buzz'); 
          } else {
            console.log(i);
          }
  }

  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
    // CREATING VARIABLE
    var string = '';
    // USING FOR LOOP 
     for (var i = 0; i < num; i++) {
       // USING ANOTHER FOR LOOP
        for (var j = 0; j < num; j++) {
          // IF I + J IS REMAINDER OF 2
           //console.log(i + j);
           if ((i + j) % 2 === 0) {
             // STRING IS ' '
              string += ' ';
           } else {
             // STRING IS '#'
              string += '#';
           }
        }
       // STRING PLUS NEW TAB
        string += '\n';
     }
     // CONSOLE LOGGING STRING
      console.log(string);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
