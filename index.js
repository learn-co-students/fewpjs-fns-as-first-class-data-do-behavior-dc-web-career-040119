/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const greet = time => {
  const timeToNumbers = time.split(':').map((n) => { return parseInt(n, 10)});

  if (timeToNumbers[0] < 12) {
    return "Good Morning"
  } else if (timeToNumbers[0] >= 12 && timeToNumbers[0] <= 17 ) {
    return "Good Afternoon"
  }
  else
    return "Good Evening"
};

const displayMessage = time => {
  document.getElementById("greeting").innerHTML = time;
}