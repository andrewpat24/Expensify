const add = (a, b) => a + b; 
const generateGreeting = (name = 'Anonymous') => `Hello ${name}.`

test('Should add two numbers', () => {
    let result = add(3, 4);
    expect(result).toBe(7);
}); 

test('Should reply with greeting', () => {
    let result = generateGreeting('Andrew');
    expect(result).toContain('Andrew');
});

test('Should reply with greeting to default val', () => {
    let result = generateGreeting();
    expect(result).toContain('Anonymous');
});