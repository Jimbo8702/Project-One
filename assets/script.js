console.log(this);

//DEPENDENCES
var lockInA = document.querySelector("#origin-button");
var lockInB = document.querySelector("#ending-button");
//DATA

//FUNCTIONS
function setUserInput() {}
//gets the user input and puts it into local storage
//set field A and field B
function tripOptions() {}
//select trip options from an array
//walk, drive, etc
function getLocation() {}
//take user input of city and convert it to zipcode or lat long
//give api lat long to get informatin back

//USER Interaction

//Inilizations
lockInA.addEventListener("click", function () {
  var startLocation = document.getElementById("origin-field");
  localStorage.setItem("Origin", startLocation.value);
});
lockInB.addEventListener("click", function () {
  var endLocation = document.getElementById("output-field");
  localStorage.setItem("Destination", endLocation.value);
});
