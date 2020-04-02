import sayingHelloWorld from './HelloWorld';

describe('function sayingHelloWorld', () => {
    it('should return Hello World', () => {
        const expectedResult = 'Hello World!';

        const result = sayingHelloWorld();
        
        expect(result).toBe(expectedResult);
    })
});