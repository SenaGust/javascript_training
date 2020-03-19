import HowOldAre from './functionHowOldAreYou';

describe('function HowOldAre', () => {
    it('should show the name and the old of one person', () => {
        const person = { 
            name: 'John', 
            age: 30 
        }, 
        expectedResult= 'John is 30 years old';

        const result = HowOldAre(person);

        expect(result).toBe(expectedResult);
    })
});