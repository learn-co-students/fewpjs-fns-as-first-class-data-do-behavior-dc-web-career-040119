/* Given Code, don't edit */

// Objective: listen for click of submit button. When that happens, display a greeting based on whether
// it is morning or afternoon


// e is the event (the click). Find the element with the id of time, read the value the user submits, and
// store it to a value called timeString. Then, invoke displayMessage, pass in the greet function. Pass
// timeString into greet()
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg;
}

// make sure the hour in the time is between 0 and 24
function greet(timeStr) {
  /* To throw an error if an incorrect time is submitted, read about Error() below:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Throwing_a_generic_error
   *
   */
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}
