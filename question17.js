"use strict";
var guests = ['Ammar', 'Mustafa', 'Harmaz', 'Talha', 'Ahsan', 'Khizer'];
// Informing that only two people can be invited
console.log("Sorry, we can only invite two people for dinner.");
// Removing guests until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Printing invitations for the remaining two guests
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are still invited to dinner. Please join us!`);
}
// Emptying the guest list
guests = [];
// Printing the empty list
console.log("Guest list:", guests);
