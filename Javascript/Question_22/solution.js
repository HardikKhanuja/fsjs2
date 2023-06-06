const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age (middle item or two middle items divided by two)
const middleIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0 ? (ages[middleIndex] + ages[middleIndex - 1]) / 2 : ages[middleIndex];

// Find the average age (sum of all items divided by the number of items)
const sumAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumAges / ages.length;

// Find the range of the ages (max minus min)
const ageRange = maxAge - minAge;

// Compare the value of (min - average) and (max - average) using the abs() method
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log('Sorted Ages:', ages);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Difference (min - average):', diffMinAverage);
console.log('Difference (max - average):', diffMaxAverage);
