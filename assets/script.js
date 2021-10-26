console.log(this);

//DEPENDENCES
var lockInA = document.querySelector("#origin-button");
var lockInB = document.querySelector("#ending-button");
var submit = document.querySelector("#submit");
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
var cityName = "Atlanta";

var locationA = {
  name: "",
  latitude: 0,
  longitude: 0,
};
var locationB = {
  name: "",
  latitude: 0,
  longitude: 0,
};

function getLocationA() {
  cityName = locationA.name;
  var llRequestURL =
    "http://api.positionstack.com/v1/forward?access_key=" +
    positionStackApiKey +
    "&query=" +
    cityName;
  $.ajax({
    url: llRequestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    locationA.latitude = response.data[0].latitude;
    locationA.longitude = response.data[0].longitude;
    locationA.longitude = locationB.longitude * -1;
    console.log("origin " + locationA.latitude);
  });
}
function getLocationB() {
  cityName = locationB.name;
  var llRequestURL =
    "http://api.positionstack.com/v1/forward?access_key=" +
    positionStackApiKey +
    "&query=" +
    cityName;
  $.ajax({
    url: llRequestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    locationB.latitude = response.data[0].latitude;
    locationB.longitude = response.data[0].longitude;
    locationB.longitude = locationB.longitude * -1;
    console.log("destination " + locationB.latitude);
  });
}

// var locationOne = locationA.latitude + "," + locationA.longitude;
// var locationTwo = locationB.latitude + "," + locationB.longitude;

function getRoute() {
  var formofTransportation = "driving-car";
  var routeApi =
    "https://api.openrouteservice.org/v2/directions/" +
    formofTransportation +
    "?api_key=" +
    openRoutesApiKey +
    "&start=" +
    locationOne +
    "&end=" +
    locationTwo;
  $.ajax({
    url: routeApi,
    method: "GET",
  })
    .then(function (response) {
      console.log(response);
    })
    .then(function (data) {
      console.log(data);
    });
}
//we need to multiply by negative one

//USER Interaction

//Inilizations
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

lockInA.addEventListener("click", function () {
  var startLocation = document.getElementById("origin-field");
  localStorage.setItem("origin", startLocation.value);
});
lockInB.addEventListener("click", function () {
  var endLocation = document.getElementById("output-field");
  localStorage.setItem("destination", endLocation.value);
});
submit.addEventListener("click", function () {
  var origin = localStorage.getItem("origin");
  var destination = localStorage.getItem("destination");
  locationA.name = origin;
  locationB.name = destination;
  console.log("This is the origin " + origin);
  console.log("This is the destination " + destination);
  getLocationA();
  getLocationB();

  getRoute();
});
>>>>>>> main
>>>>>>> 51f19944cbf97e8331405ff5d00eedb70f7ccce2
/// super small change
