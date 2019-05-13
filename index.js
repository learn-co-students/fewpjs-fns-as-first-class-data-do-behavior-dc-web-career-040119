/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time){

  let checkTime = parseInt(time)
  if(checkTime < 12)
  return "Good Morning"
  if(checkTime > 17)
  return "Good Evening"
  else return "Good Afternoon"


  // if(checkTime < "12:00"){
  //   return "Good Morning"
  // }else if (checkTime > "12:00" && checkTime < "17:00"){
  //   return "Good Afternoon"
  // }else if (checkTime > "17:00"){
  //   return "Good Evening"
  // }


}



function displayMessage(string){
  document.getElementById("greeting").textContent = string
}




/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
