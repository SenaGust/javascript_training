import Write from './javascriptTemplateLiterals';
import HowOldAre from './functionHowOldAreYou';
jest.mock('./functionHowOldAreYou');

describe('function Write', () => {
    it('should show the result mocking HowOldAre', () => {
        console.log = jest.fn();

        Write();

        expect(HowOldAre).toHaveBeenCalledTimes(3);
        expect(HowOldAre).toHaveBeenNthCalledWith(1,{ name: 'John', age: 30 });
        expect(HowOldAre).toHaveBeenNthCalledWith(2,{ name: 'Marie', age: 22 });
        expect(HowOldAre).toHaveBeenNthCalledWith(3,{ name: 'August', age: 30 });
        expect(console.log).toHaveBeenCalledTimes(3)
    })
});