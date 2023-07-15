"use strict";
var str1 = 'hello';
var str2 = 'HELLO';
console.log("Is str1 == str2? I predict False.");
console.log(str1 == str2);
console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);
// Tests using the lowercase function
var names = 'ahmed';
console.log("Is name.toLowerCase() == 'john'? I predict True.");
console.log(names.toLowerCase() == 'Ali');
console.log("Is name.toLowerCase() == 'jane'? I predict False.");
console.log(names.toLowerCase() == 'Talha');
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);
console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 < num2? I predict False.");
console.log(num1 < num2);
console.log("Is num1 >= num2? I predict True.");
console.log(num1 >= num2);
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var age = 25;
var hasLicense = true;
console.log("Is age >= 18 and hasLicense? I predict True.");
console.log(age >= 18 && hasLicense);
console.log("Is age < 18 or hasLicense? I predict True.");
console.log(age < 18 || hasLicense);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
var colors = ['red', 'green', 'blue'];
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));
console.log("Is 'green' not in the colors array? I predict False.");
console.log(!colors.includes('green'));
