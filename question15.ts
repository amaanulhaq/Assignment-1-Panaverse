const guestlists = ["Talha","Ahmed","Khizer"];
const index = guestlists.indexOf('Ahmed'); // 👉️  0

if (index !== -1) {
  guestlists[index] = 'Ali';
}
console.log("I have invited you for a dinner today tomorrrow at 10pm" + " " +guestlists[0])
console.log("I have invited you for a dinner today tomorrrow at 10pm" + " " +guestlists[1])
console.log("I have invited you for a dinner today tomorrrow at 10pm" + " " +guestlists[2])
console.log(guestlists[0])


