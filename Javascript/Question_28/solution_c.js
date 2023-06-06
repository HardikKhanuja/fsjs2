function printPyramidPattern(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
}

const heightInput = prompt('Enter the height of the pyramid:');

const height = parseInt(heightInput);

if (isNaN(height) || height <= 0) {
  console.log('Invalid input. Please enter a valid positive number.');
} else {
  printPyramidPattern(height);
}
