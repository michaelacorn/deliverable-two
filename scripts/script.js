var destination

var vacationType = prompt("What type of trip would you like to go on: Musical, Tropical, or Adventurous?");
if (vacationType == "Musical") {
  destination = "New Orleans"
  alert ("Feel the beat! Let's move on.");
} else if (vacationType == "Tropical") {
  destination = "Beach Vacation in Mexico"
  alert ("Some place warm, eh? That sounds amazing right now. Next question!");
} else if (vacationType == "Adventurous") {
  destination = "Whitewater Rafting the Grand Canyon"
  alert ("Adventure. Excitement. Clearly this Jedi is craving that. On to the next one!");
} else {
  alert ("Gotta answer these, bud.");
}
var travelType 

var groupSize = prompt("How many will be traveling with you? 1-2, 3-5, 6+");
if (groupSize == "1-2") {
  travelType = "First Class Travel"
  alert ("Just the two of you, eh? Here's what we suggest...");
} else if (groupSize == "3-5") {
  travelType = "Helicopter"
  alert ("If two's a crowd, then three is a party! Let's see what works best for your group...");
} else if (groupSize == "6+") {
  travelType = "Charter Flight"
  alert ("Whoa! That's a lot. We can work with that...");
} else {
  alert ("Need to know how many, yo.");
}

var result

if (vacationType && groupSize) {
  alert("Based on you wanting something " + vacationType + " and having a group of " + groupSize + " we suggest " + travelType +  " to " + destination + "! Safe travels. :)")
}

