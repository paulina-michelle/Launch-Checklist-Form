// Write your JavaScript code here!
window.addEventListener("load", function() {
   let userInputForm = document.querySelector("form");
   userInputForm.addEventListener("submit", function(event){
      event.preventDefault();
      console.log("did this trigger")
   });
   
   userInputForm.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
         alert("Make sure to enter valid information for each field.");
      }
      if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         alert("Make sure to enter valid information for each field.");
      }
   });
   
   let userProvidedPilotName = document.querySelector("input[name=pilotName]");
   let userProvidedCopilotName = document.querySelector("input[name=copilotName]");
   let userProvidedFuelLevel = document.querySelector("input[name=fuelLevel]");
   let userProvidedCargoMass = document.querySelector("input[name=cargoMass]");
   
   updateCrewNames(userProvidedPilotName, userProvidedCopilotName);
   updateFuelLevelStatus(userProvidedFuelLevel);
   updateCargoMassStatus(userProvidedCargoMass);

});


function updateCrewNames(userProvidedPilotName, userProvidedCopilotName) {
   // let userProvidedPilotName = document.querySelector("input[name=pilotName]");
   // let userProvidedCopilotName = document.querySelector("input[name=copilotName]");
   document.getElementById("pilotStatus").innerHTML = "Pilot" + userProvidedPilotName + "is ready for launch";
   document.getElementById("copilotStatus").innerHTML = "Co-pilot" + userProvidedCopilotName + "is ready for launch";
}

function updateFuelLevelStatus(userProvidedFuelLevel) {
   // let userProvidedFuelLevel = document.querySelector("input[name=fuelLevel]");
   if (userProvidedFuelLevel >= 10000) {  
      document.getElementById("fuelStatus").innerHTML = userProvidedFuelLevel + "Fuel level is high enough for launch";
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
      document.getElementById("launchStatus").style.color = "green";
   } else {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = userProvidedFuelLevel + "Fuel level is too low for launch";
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
   } 
}

function updateCargoMassStatus(userProvidedCargoMass) {
   // let userProvidedCargoMass = document.querySelector("input[name=cargoMass]");
   if (userProvidedCargoMass <= 10000) {
      document.getElementById("cargoStatus").innerHTML = userProvidedCargoMass + "Cargo mass is low enough for launch";
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
      document.getElementById("launchStatus").style.color = "green";
   } else {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("cargoStatus").innerHTML = userProvidedCargoMass + "Cargo mass is too high for launch";
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
   }
}


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
