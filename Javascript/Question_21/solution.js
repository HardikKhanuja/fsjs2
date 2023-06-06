var countries = ['India', 'Russia', 'Sri Lanka', 'Nepal', 'Bhutan', 'USA'];
var index = countries.indexOf('Ethiopia');

if (index !== -1) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

console.log(countries);
