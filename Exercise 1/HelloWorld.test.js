const expectExport = require("expect");

describe('function sayingHelloWorld', () => {
    it('should show Hello World', () => {
        const result = sayingHelloWorld();
        expectExport(result).toBe('Hello World!');
    })
});