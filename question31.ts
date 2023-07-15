var usernames = ['admin', 'Talha', 'Amir', 'Ali', 'Ahmed'];

if (usernames.length > 0) {
  for (var username of usernames) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames = [];

if (usernames.length > 0) {
  for (var username of usernames) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users!");
}