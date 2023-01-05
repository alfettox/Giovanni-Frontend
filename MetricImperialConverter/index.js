// javascript
let numEl = document.getElementById("num-el")
let lengthNum = document.getElementById("length-num")
let volumeNum = document.getElementById("volume-num")
let massNum = document.getElementById("mass-num")

function convert() {
  
  // Meters to Feet
  let metersToFeet = numEl.value * 3.28084
  let feetToMeters = numEl.value / 3.28084
  let metersToFeetValue = numEl.value + " meters = " + metersToFeet.toFixed(2) + " feet"
  let feetToMetersValue = numEl.value + " feet = " +  feetToMeters.toFixed(2) + " m"
  lengthNum.textContent = metersToFeetValue + " || " +  feetToMetersValue 
  
  // Liters to Gallons
  let litersToGallons = numEl.value * 0.26417
  let gallonsToLiters = numEl.value / 0.26417
  let litersToGallonsValue = numEl.value + " l = " + litersToGallons.toFixed(2) + " gallons"
  let gallonsToLitersValue = numEl.value + " gallons = " + gallonsToLiters.toFixed(2) + " l"
  volumeNum.textContent = litersToGallonsValue + " || " + gallonsToLitersValue
  
  // Kilograms to Pounds
  let kilogramsToPounds = numEl.value * 2.20462
  let poundsToKilograms = numEl.value / 2.20462
  let kilogramsToPoundsValue = numEl.value + " kilogkgrams = " + kilogramsToPounds.toFixed(2) + " pounds"
  let poundsToKilogramsValue = numEl.value + " pounds = " + poundsToKilograms.toFixed(2) + " kg"
  massNum.textContent = kilogramsToPoundsValue +  " || "  + poundsToKilogramsValue
  }
  
