function printSquarePattern(size) {
  for (let i = 1; i <= size; i++) {
    let pattern = '';
    for (let j = 1; j <= size; j++) {
      pattern += '*';
    }
    console.log(pattern);
  }
}

const sizeInput = prompt('Enter the size of the square:');

const size = parseInt(sizeInput);

if (isNaN(size) || size <= 0) {
  console.log('Invalid input. Please enter a valid positive number.');
} else {
  printSquarePattern(size);
}
