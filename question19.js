"use strict";
var guest = ["Talha", "Ahmed", "Khizer"];
// Informing people about the dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding a new guest to the beginning
guest.unshift('Ali');
// Adding a new guest to the middle
guest.splice(Math.floor(guest.length / 2), 0, 'Misal');
// Adding a new guest to the end
guest.push('Mohsin');
// Printing new invitation messages
for (var guest1 of guest) {
    console.log(`Dear ${guest}, you are invited to dinner at my place. Please join us!`);
}
// Printing the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guest.length}`);
