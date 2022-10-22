// Prompt user for a number and store it in the variable
var number = prompt('Enter a number: ');

// Variable which value will increment from 1 to 9
var i = 1;                              

// HTML title
var msg = '<h2>Multiplication Table</h2>';  


// Repeats 9 times to generate the multiplication table
  while (i < 10) {
    // Generates one line of the multiplication table
    msg += i + ' x ' + number + ' = ' + (i * number) + '<br />';
    // Increments variable i by one
    i++;
  }

// Finds blackboard element in the HTML and points the el variable to it
var el = document.getElementById('blackboard');

// Write the msg variable into the page
el.innerHTML = msg;

