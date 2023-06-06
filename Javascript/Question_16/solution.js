var month = prompt("Enter the name of a month:");
month = month.toLowerCase();
var season;

if (month === "september" || month === "october" || month === "november") {
  season = "Autumn";
} else if (month === "december" || month === "january" || month === "february") {
  season = "Winter";
} else if (month === "march" || month === "april" || month === "may") {
  season = "Spring";
} else if (month === "june" || month === "july" || month === "august") {
  season = "Summer";
} else {
  console.log("Invalid month entered. Please enter a valid month name.");
  return;
}

console.log("The season in " + month + " is: " + season);
