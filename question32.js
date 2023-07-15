"use strict";
var current_users = ['Talha', 'Ahmed', 'Usman', 'Ahmad', 'Ali'];
var new_users = ['Khizer', 'Mustafa', 'Usman', 'Ali', 'Faisal'];
// Convert all usernames in current_users to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(user => user.toLowerCase());
for (var new_user of new_users) {
    var new_user_lower = new_user.toLowerCase(); // Convert the new username to lowercase
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
    }
}
