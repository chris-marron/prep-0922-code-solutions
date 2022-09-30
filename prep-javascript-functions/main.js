function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var minutesTimehour = 2 * 60;
  return minutesTimehour;
}

var multi = convertHoursToMinutes(2, 60);
console.log('Minutes:', multi);

function getGreeting(name) {
  var greeting = 'Hello ' + name + '!';
  return greeting;

}

var greeting = getGreeting('World');
console.log('Greetings:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var total = (num1 + num2) * 5;
  return total;

}

var total = addAndMultiplyBy5(10, 5);
console.log('Grand Total:', total);

function multiplyAndDivideby5(num1, num2) {
  var multiDiv = num1 * num2 / 5;
  return multiDiv;
}

var test = multiplyAndDivideby5(35, 10);
console.log('The Answer:', test);

function subtractTwoNumbers(num1, num2) {
  var sub = num1 - num2;
  return sub;
}

var sub = subtractTwoNumbers(22, 7);
console.log('Subtract ex:', sub);

function getCircleCircumference(radius) {
  var rad = 2 * Math.PI * radius;
  return rad;
}

var rad = getCircleCircumference(5);
console.log('Possible', rad);

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

var fullName = getFullName('Christopher', 'Marron');
console.log('Full Name:', fullName);

function cube(number) {
  var cubeNumber = number * number * number;
  return cubeNumber;
}

var box = cube(5);
console.log('Cube Exercise:', box);
