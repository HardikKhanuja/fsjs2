var score = prompt("Enter the student's score:");
score = Number(score);
var grade;

if (score >= 80 && score <= 100) {
  grade = "A";
} 
else if (score >= 70 && score < 80) {
  grade = "B";
} 
else if (score >= 60 && score < 70) {
  grade = "C";
} 
else if (score >= 50 && score < 60) {
  grade = "D";
} 
else if (score >= 0 && score < 50) {
  grade = "F";
} 
else {
  console.log("Invalid score entered. Please enter a score between 0 and 100.");
  return;
}

console.log("The student's grade is: " + grade);
