const { Write, HowOldAre } = require('./javascriptTemplateLiterals');

describe('function HowOldAre', () => {
    it('should show the name and the old of a person', () => {
        const result = HowOldAre({ name: 'John', age: 30 });
        expect(result).toBe('John is 30 years old');
    })
});

describe('function Write', () => {
    it('should show the data of all people', () => {
        const result = Write([
            { name: 'John', age: 30 },
            { name: 'Marie', age: 22 },
            { name: 'August', age: 30 }
          ]);
        expect(result).toBe(`John is 30 years old
        Marie is 22 years old
        August is 30 years old`);
    })
});