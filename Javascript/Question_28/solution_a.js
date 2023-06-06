function printTrianglePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '*';
    }
    console.log(pattern);
  }
}

const rowsInput = prompt('Enter the number of rows:');

const rows = parseInt(rowsInput);

if (isNaN(rows) || rows <= 0) {
  console.log('Invalid input. Please enter a valid positive number.');
} else {
  printTrianglePattern(rows);
}
