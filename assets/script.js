console.log(this);

//DEPENDENCES
var lockInA = document.querySelector("#origin-button");
var lockInB = document.querySelector("#ending-button");
var openRoutesApiKey =
  "5b3ce3597851110001cf624821c7a5f3efe347c5ae20608b3c765691";
var positionStackApiKey = "5e790f29e566f2f69cba98b84c761f7e";
//DATA

//FUNCTIONS
function setUserInput() {}
//gets the user input and puts it into local storage
//set field A and field B
//Doing this outside of a function
function tripOptions() {}
//select trip options from an array
//walk, drive, etc

var positionStackApiKey = "5e790f29e566f2f69cba98b84c761f7e";
var cityName = "New-York";
var llRequestURL =
  "http://api.positionstack.com/v1/forward?access_key=" +
  positionStackApiKey +
  "&query=" +
  cityName;
function getLocation() {
  $.ajax({
    url: llRequestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
getLocation(); //we need to multiply by negative one

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
