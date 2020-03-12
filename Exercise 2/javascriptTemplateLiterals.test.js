const { helper } = require('./javascriptTemplateLiterals');

describe('function HowOldAre', () => {
    it('should show the name and the old of one person', () => {
        const result = helper.HowOldAre({ name: 'John', age: 30 });
        expect(result).toBe('John is 30 years old');
    })
});

describe('function Write', () => {
    it('should show the result mocking HowOldAre', () => {
        console.log = jest.fn();
        const spyHowOldAreYou = jest.spyOn(helper, 'HowOldAre');

        helper.Write();

        expect(spyHowOldAreYou).toHaveBeenCalledTimes(3);
        expect(spyHowOldAreYou).toHaveBeenNthCalledWith(1,{ name: 'John', age: 30 });
        expect(spyHowOldAreYou).toHaveBeenNthCalledWith(2,{ name: 'Marie', age: 22 });
        expect(spyHowOldAreYou).toHaveBeenNthCalledWith(3,{ name: 'August', age: 30 });
        expect(console.log).toHaveBeenCalledTimes(3)
    })
});