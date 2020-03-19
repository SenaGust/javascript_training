const people = [
  { name: 'John', age: 30 },
  { name: 'Marie', age: 22 },
  { name: 'August', age: 30 }
];

function Write() {
  people.forEach(person => {
    console.log(this.HowOldAre(person));
   }
  )
}

export default Write;