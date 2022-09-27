var person = {
  firstName: 'Chris',
  lastName: 'Marron',
  hobby: 'Cycling'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The persons name is:', fullName);
person.job = 'unemployed';
console.log("The person's previous jobs is:", person.job);
person.previousJob = 'Audi';
console.log("The person's previous job is:", person.previousJob);
console.log(person);
