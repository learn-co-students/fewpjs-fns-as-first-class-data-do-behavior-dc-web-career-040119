/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(msg){
  let h1 = document.getElementById('greeting')
  h1.innerText= msg
}

function greet(timeString){
  let hour= parseInt(timeString)

  if(hour < 12){
    return "Good Morning"
  }
  if(hour > 17){
    return "Good Evening"
  }

  return "Good Afternoon"
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
