// Write your JavaScript code here!
window.addEventListener("load", function() {
   document.getElementById("formSubmit").addEventListener("click", function(event){
      event.preventDefault();
      console.log("did this trigger")});
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=Pilot Name]");
      console.log(pilotName.value);
      let copilotName = document.querySelector("input[name=Co-Pilot Name]");
      let fuelLevel = document.querySelector("input[name=Fuel Level]");
      let cargoMass = document.querySelector("input[name=Cargo Mass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      // if (isNaN(pilotName.value) = true)
      // if (isNaN(copilotName.value) = true)
      // if (isNaN(fuelLevel.value) = false)
      // if (isNaN(cargoMass.value) = false)
   });
});




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
