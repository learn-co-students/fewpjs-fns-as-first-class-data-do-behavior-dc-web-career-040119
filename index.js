/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(string) {
	const date_time = (parseInt(string.split(":").join("")))

	if (date_time < 1200) {
		return "Good Morning"
	}
	else if (date_time >= 1200 && date_time <=1700) {
		return "Good Afternoon"
	}
	else {
		return "Good Evening"
	}
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
	document.getElementById('greeting').textContent = string
	debugger
}
