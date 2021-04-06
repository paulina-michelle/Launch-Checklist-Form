// Write your JavaScript code here!
window.addEventListener("load", function() {
   document.getElementById("formSubmit").addEventListener("click", function(event){
      event.preventDefault();
      console.log("did this trigger")});
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      if (isNaN(pilotName.value) = fallse || (isNaN(copilotName.value) = false) {
         alert("Make sure to enter valid information for each field.");
      }
      if (isNaN(fuelLevel.value) = true || isNaN(cargoMass.value) = true) {
         alert("Make sure to enter valid information for each field.");
      }
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
