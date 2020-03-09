const { Write, HowOldAre } = require('./javascriptTemplateLiterals');

describe('function HowOldAre', () => {
    it('should show the name and the old of one person', () => {
        const result = HowOldAre({ name: 'John', age: 30 });
        expect(result).toBe('John is 30 years old');
    })
});

describe('function Write', () => {
    it('should show the result mocking HowOldAre', () => {
        
        console.log = jest.fn();

        const HowOldAre = jest.fn(person => `${person.name} is ${person.age} years old`);
        HowOldAre.mockReturnValueOnce("John is 30 years old")
        .mockReturnValueOnce("Marie is 22 years old")
        .mockReturnValueOnce("August is 30 years old");
        
        Write(HowOldAre);
        expect(HowOldAre).toHaveBeenCalledTimes(3);
        expect(HowOldAre).toHaveBeenNthCalledWith(1,"John is 30 years old");
        expect(HowOldAre).toHaveBeenNthCalledWith(2,"Marie is 22 years old");
        expect(HowOldAre).toHaveBeenNthCalledWith(3,"August is 30 years old");
    })
});

describe('function Write', () => {
    it('should show the data of all people without mock HowOldAre', () => {
        console.log = jest.fn()

        Write();
        expect(console.log).toHaveBeenCalledTimes(3)
        expect(console.log).toHaveBeenNthCalledWith(1,"John is 30 years old")
        expect(console.log).toHaveBeenNthCalledWith(2,"Marie is 22 years old")
        expect(console.log).toHaveBeenNthCalledWith(3,"August is 30 years old")
    })
});