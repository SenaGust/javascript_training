const people = [
  { name: 'John', age: 30 },
  { name: 'Marie', age: 22 },
  { name: 'August', age: 30 }
];

 function HowOldAre(person) {
  return `${person.name} is ${person.age} years old`;
 };

 function Write() {
  people.forEach(person => {
    console.log(HowOldAre(person));
  });
 }

 Write();

 module.exports = {HowOldAre, Write, people};