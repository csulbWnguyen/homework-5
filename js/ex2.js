let arrayN=[1,2,3,4,5,6,7,8,9,10];


//filter for odd numbers
const oddNumbers = arrayN.filter(x => x%2);
console.log(oddNumbers);

//filter for even numbers or filter for numbers divisible by 5
const twoOrfive = arrayN.filter(x => x%5 === 0|| x%2 ===0);
console.log(twoOrfive);

//for c. I am assuming I am filtering numbers divisible by 3 and squaring them.
const threeDiv = arrayN.filter(x => x%3 === 0).map(x=>x**2);
console.log(threeDiv);

//filter for numbres divisible by 5, then square,then add
const div5 = arrayN.filter(x=>x%5 === 0).map(x=>Math.pow(x,2)).reduce((acc,value)=>acc+value,0);

console.log(div5);