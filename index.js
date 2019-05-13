/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  if (time[0] == 0 || time[1] == ":" || time[2] == ":" && time[1] < 2) {
    return 'Good Morning'
  }
  else if (time[2] == ":" && time[1] > 2 && time[1] < 7) {
    return 'Good Afternoon'
  }
  else if (time[2] == ":" && time[0] == 1 && time[1] > 6 || time[0] == 2 ) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(myString) {

}
