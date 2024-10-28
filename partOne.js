const equalto100 = (a,b) => a === 100 || b === 100 ||(a + b) === 100;

console.log(equalto100(100,0));
console.log(equalto100(20,100));
console.log(equalto100(20,80));
console.log(equalto100(-20,120));


