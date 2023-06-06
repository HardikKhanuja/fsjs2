var month = prompt("Enter the name of a month:");
var year = prompt("Enter the year:");
month = month.toLowerCase();
var days;

if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
  days = 31;
} 
else if (month === "april" || month === "june" || month === "september" || month === "november") {
  days = 30;
}
else if (month === "february") {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days = 29;
  } else {
    days = 28;
  }
} 
else {
  console.log("Invalid month entered. Please enter a valid month name.");
  return;
}

console.log("The number of days in " + month + " " + year + " is: " + days);
