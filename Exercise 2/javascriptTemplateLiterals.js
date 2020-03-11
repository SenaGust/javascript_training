const people = [
  { name: 'John', age: 30 },
  { name: 'Marie', age: 22 },
  { name: 'August', age: 30 }
];

const helper = {
  HowOldAre(person) {
    return `${person.name} is ${person.age} years old`;
   },
  Write() {
  people.forEach(person => {
    console.log(HowOldAre(person));
   }
  )},
};

 module.exports = {helper};