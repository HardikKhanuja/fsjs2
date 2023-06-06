var month = prompt("Enter the name of a month:");
month = month.toLowerCase();
var days;

if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
  days = 31;
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
  days = 30;
} else if (month === "february") {
  days = "28 or 29";
} else {
  console.log("Invalid month entered. Please enter a valid month name.");
  return;
}

console.log("The number of days in " + month + " is: " + days);
