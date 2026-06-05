const numb1 = new Number(1000.4)
console.log(numb1.toFixed(2))
console.log(numb1.toPrecision(4))

console.log(numb1.toLocaleString('en-IN'))



/*++++++++++++++MATHS++++++++++++++++++++++*/
console.log(Math.abs(-10))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.round(4.5))
const min = 10
const max = 20
const random = Math.random() * (max - min) + min
console.log(random)
console.log(Math.random())
console.log(Math.max(1,2,3,4,5))
console.log(Math.min(1,2,3,4,5))