"use strict";
const guestlis = ["Talha", "Ahmed", "Khizer"];
console.log("Good news! We found a bigger dinner table.");
// Adding a new guest to the beginning
guestlis.unshift('Afaq');
// Adding a new guest to the middle
guestlis.splice(Math.floor(guestlis.length / 2), 0, 'Misal');
// Adding a new guest to the end using push()
guestlis.push('Fatima');
// Printing new invitation messages
for (let i = 0; i < guestlis.length; i++) {
    console.log(`Dear ${guestlis[i]}, you are invited to dinner at my place. Please join us!`);
}
