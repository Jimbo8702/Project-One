//DEPENDENCES

var lockInA = document.querySelector("#origin-button");
var lockInB = document.querySelector("#ending-button");
var submit = document.querySelector("#submit");
var openRoutesApiKey =
  "5b3ce3597851110001cf624821c7a5f3efe347c5ae20608b3c765691";
var positionStackApiKey = "5e790f29e566f2f69cba98b84c761f7e";
//DATA

//FUNCTIONS
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
    console.log("origin " + locationA.latitude);
    localStorage.setItem("locationA", JSON.stringify(locationA));
    return locationA;
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
    console.log("destination " + locationB.latitude);
    localStorage.setItem("locationB", JSON.stringify(locationB));
    return locationB;
  });
}

function getRoute() {
  var locOrigin = JSON.parse(localStorage.getItem("locationA"));
  var locDestination = JSON.parse(localStorage.getItem("locationB"));
  var locationOne = locOrigin.longitude + "," + locOrigin.latitude;
  var locationTwo = locDestination.longitude + "," + locDestination.latitude;
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
  console.log(routeApi);
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

function setRoute() {
  var locOrigin = JSON.parse(localStorage.getItem("locationA"));
  var locDestination = JSON.parse(localStorage.getItem("locationB"));
  var locationOne = locOrigin.latitude + "," + locOrigin.longitude;
  var locationTwo = locDestination.latitude + "," + locDestination.longitude;

  // Instantiate a map and platform object:
  var platform = new H.service.Platform({
    apikey: "owwQPmvcB76JMPSBwfPmXyceEJS1h6eYxi1Sx1bblfI",
  });
  // Retrieve the target element for the map:
  var targetElement = document.getElementById("map-container");

  // Get the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();

  // Instantiate the map:
  var map = new H.Map(
    document.getElementById("map-container"),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 52.51, lng: 13.4 },
    }
  );

  // Create the parameters for the routing request:
  var routingParameters = {
    routingMode: "fast",
    transportMode: "car",
    // The start point of the route:
    origin: locationOne,
    // The end point of the route:
    destination: locationTwo,
    // Include the route shape in the response
    return: "polyline",
  };

  // Define a callback function to process the routing response:
  var onResult = function (result) {
    // ensure that at least one route was found
    if (result.routes.length) {
      result.routes[0].sections.forEach((section) => {
        // Create a linestring to use as a point source for the route line
        let linestring = H.geo.LineString.fromFlexiblePolyline(
          section.polyline
        );

        // Create a polyline to display the route:
        let routeLine = new H.map.Polyline(linestring, {
          style: { strokeColor: "blue", lineWidth: 3 },
        });

        // Create a marker for the start point:
        let startMarker = new H.map.Marker(section.departure.place.location);

        // Create a marker for the end point:
        let endMarker = new H.map.Marker(section.arrival.place.location);

        // Add the route polyline and the two markers to the map:
        map.addObjects([routeLine, startMarker, endMarker]);

        // Set the map's viewport to make the whole route visible:
        map
          .getViewModel()
          .setLookAtData({ bounds: routeLine.getBoundingBox() });
      });
    }
  };

  // Get an instance of the routing service version 8:
  var router = platform.getRoutingService(null, 8);

  // Call calculateRoute() with the routing parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  router.calculateRoute(routingParameters, onResult, function (error) {
    alert(error.message);
  });
}

//Functions below are intended to aggregate all saved trips total cost and CO2 impact. The .key placeholder will need to be updated once the localStorage object is populated from APIs. Functions will also need to be nested within other functions.""

// function totalCost() {
//   var sum = 0;
//   for (x = 0; x < localStorage.length; x++) {
//     sum += localStorage.key[i];
//   }
//   return sum;
// }
// function totalCO2() {
//   var CO2 = 0;
//   for (x = 0; x < localStorage.length; x++) {
//     CO2 += localStorage.key[i];
//   }
//   return CO2;
// }
//USER Interaction

//Inilizations
// <<<<<<< HEAD
// =======
// <<<<<<< HEAD
// =======
// <<<<<<< HEAD
// =======
// >>>>>>> main

function setLocation() {
  var startLocation = document.getElementById("origin-field");
  localStorage.setItem("origin", startLocation.value);
  var endLocation = document.getElementById("output-field");
  localStorage.setItem("destination", endLocation.value);
}

submit.addEventListener("click", function () {
  setLocation();
  locationA.name = document.getElementById("origin-field").value;
  locationB.name = document.getElementById("output-field").value;
  getLocationA();
  getLocationB();
  getRoute();
  setRoute();
});
