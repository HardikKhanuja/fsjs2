function calculateBMI(weight, height) {
  const heightInMeters = height / 100; 
  const bmi = weight / (heightInMeters * heightInMeters); 

  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

const weightInput = prompt('Enter your weight in kilograms: ');
const weight = parseFloat(weightInput);

const heightInput = prompt('Enter your height in centimeters: ');
const height = parseFloat(heightInput);

if (isNaN(weight) || isNaN(height)) {
  console.log('Invalid input. Please enter valid numeric values for weight and height.');
} else {
  const bmi = calculateBMI(weight, height);
  console.log(`BMI: ${bmi}`);
}
