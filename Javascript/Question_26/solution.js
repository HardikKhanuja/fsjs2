const numberInput = prompt('Enter a number:');

const number = parseInt(numberInput);

if (isNaN(number)) {
  console.log('Invalid input. Please enter a valid number.');
} else {
  console.log(`Multiplication Table of ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} * ${i} = ${result}`);
  }
}
