var now = new Date();

// What is the year today?
var year = now.getFullYear();

// What is the month today as a number? (Month index starts from 0)
var month = now.getMonth();

// What is the date today?
var date = now.getDate();

// What is the day today as a number? (Sunday is 0, Monday is 1, and so on)
var day = now.getDay();

// What is the hours now?
var hours = now.getHours();

// What is the minutes now?
var minutes = now.getMinutes();

// Find out the number of seconds elapsed from January 1, 1970 to now
var seconds = Math.floor(now.getTime() / 1000);

// Displaying the results
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds elapsed since January 1, 1970:", seconds);
