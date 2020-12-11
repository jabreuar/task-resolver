const CalculatorFactory = require('./calculator/calculator').default;

const left = 10;
const right = 10;

let addition = new CalculatorFactory("addition", left, right);

console.log(addition.apply())

