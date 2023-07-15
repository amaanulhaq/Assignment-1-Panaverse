"use strict";
var placesToVisit = ["Lahore", "Karachi", "Multan", "Sialkot", "Islamabad"];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());
// Print the array to show it's still in its original order
console.log("Original order (unchanged):", placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// Print the array to show it's still in its original order
console.log("Original order (unchanged):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show the changed order
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
// Print the array to show it's back to its original order
console.log("Original order (unchanged):", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
// Print the array to show the changed order
console.log("Alphabetical order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
// Print the array to show the changed order
console.log("Reverse alphabetical order:", placesToVisit);
