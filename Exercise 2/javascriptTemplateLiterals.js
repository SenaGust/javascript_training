const people = [
  { name: 'John', age: 30 },
  { name: 'Marie', age: 22 },
  { name: 'August', age: 30 }
];

 function HowOldAre(people) {
  return `${people.name} is ${people.age} years old`;
 };

 function write() {
  people.forEach(person => {
    console.log(HowOldAre(person));
  });
 }


 module.exports = {HowOldAre, Write, people};