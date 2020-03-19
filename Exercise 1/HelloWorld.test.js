import sayingHelloWorld from './HelloWorld';

describe('function sayingHelloWorld', () => {
    it('should show Hello World', () => {
        const result = sayingHelloWorld();
        expect(result).toBe('Hello World!');
    })
});