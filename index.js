/* Given Code, don't edit */

function handleClick (e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here... */

/* Write your implementation of greet() */

function greet (timeString) {
  const [hour] = timeString.split(':').map(intString => parseInt(intString, 10))
  let greeting
  if (hour >= 0 && hour < 12) {
    greeting = 'Good Morning'
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon'
  } else if (hour >= 17 && hour < 24) {
    greeting = 'Good Evening'
  } else {
    greeting = 'Error: invalid time'
  }
  return greeting
}

/* Write your implementation of displayMessage() */

function displayMessage (message) {
  const greetingElement = document.getElementById('greeting')
  greetingElement.innerText = message
}
