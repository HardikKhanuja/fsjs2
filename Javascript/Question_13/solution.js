var age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  var yearsToWait = 18 - age;
  console.log("Sorry, you are not 18 yet. Please wait for " + yearsToWait + " year(s) to drive.");
}
