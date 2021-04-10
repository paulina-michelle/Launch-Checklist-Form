// Write your JavaScript code here!
window.addEventListener("load", function() {
   let userInputForm = document.querySelector("form");
   userInputForm.addEventListener("submit", function(event){
      event.preventDefault();
      console.log("did this trigger");
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
      
      let userProvidedPilotName = document.querySelector("input[name=pilotName]").value;
      let userProvidedCopilotName = document.querySelector("input[name=copilotName]").value;
      let userProvidedFuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let userProvidedCargoMass = document.querySelector("input[name=cargoMass]").value;
   
      
      updateCrewNames(userProvidedPilotName, userProvidedCopilotName);
      updateFuelLevelAndCargoMassStatus(userProvidedFuelLevel, userProvidedCargoMass);

      
      let json = [];
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            console.log(json);
         };
         )};
      const destination = document.getElementById("missionTarget");
      destination.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[2].name}</li>
         <li>Diameter: ${json[2].diameter}</li>
         <li>Star: ${json[2].star}</li>
         <li>Distance from Earth: ${json[2].distance}</li>
         <li>Number of Moons: ${json[2].moons}</li>
      </ol>
      <img src="${json[2].image}">
      `;
      
   )
   };
)};



function updateCrewNames(userProvidedPilotName, userProvidedCopilotName) {
   document.getElementById("pilotStatus").innerHTML = `Pilot ${userProvidedPilotName} is ready for launch`;
   document.getElementById("copilotStatus").innerHTML = `Co-pilot ${userProvidedCopilotName} is ready for launch`;
}

function updateFuelLevelAndCargoMassStatus(userProvidedFuelLevel, userProvidedCargoMass) {
   let launchStatusMessage = document.getElementById("launchStatus");
   console.log(userProvidedFuelLevel);
   if (userProvidedFuelLevel >= 10000 && userProvidedCargoMass <= 10000) {  
      document.getElementById("fuelStatus").innerHTML = `${userProvidedFuelLevel} Fuel level is high enough for launch`;
      document.getElementById("cargoStatus").innerHTML = `${userProvidedCargoMass} Cargo mass is low enough for launch`;
      launchStatusMessage.innerHTML = "Shuttle is ready for launch";
      launchStatusMessage.style.color = "green";
   } else if (userProvidedFuelLevel < 10000 && userProvidedCargoMass > 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = `${userProvidedFuelLevel} Fuel level is too low for launch`;
      document.getElementById("cargoStatus").innerHTML = `${userProvidedCargoMass} Cargo mass is too high for launch`;
      launchStatusMessage.innerHTML = "Shuttle not ready for launch";
      launchStatusMessage.style.color = "red";
   } else if (userProvidedFuelLevel < 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = `${userProvidedFuelLevel} Fuel level is too low for launch`;
      document.getElementById("cargoStatus").innerHTML = `${userProvidedCargoMass} Cargo mass is low enough for launch`;
      launchStatusMessage.innerHTML = "Shuttle not ready for launch";
      launchStatusMessage.style.color = "red";
   }  else if (userProvidedCargoMass > 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = `${userProvidedFuelLevel} Fuel level is high enough for launch`;
      document.getElementById("cargoStatus").innerHTML = `${userProvidedCargoMass} Cargo mass is too high for launch`;
      launchStatusMessage.innerHTML = "Shuttle not ready for launch";
      launchStatusMessage.style.color = "red";
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
