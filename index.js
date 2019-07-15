/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  var time = string.split(":")
  time = parseInt(time[0])
  if (time > 17){
    return "Good Evening"
  }
  else if (time < 12){
    return "Good Morning"
  }
  else if (time < 17 && time > 12){
    return "Good Afternoon"
  }


}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById("greeting").textContent = string
}
