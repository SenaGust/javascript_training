import HowOldAre from './functionHowOldAreYou'

const people = [
  { name: 'John', age: 30 },
  { name: 'Marie', age: 22 },
  { name: 'August', age: 30 }
];

function Write() {
  people.forEach(person => {
    console.log(HowOldAre(person));
   }
  )
}

export default Write;