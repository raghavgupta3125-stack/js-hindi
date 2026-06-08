//an array can have any thing inside it ex string ,number etc
const myarr = [10, 20 , 30, 40, 50, 60 ,70]

const string = myarr.join()  // array to string

console.log(string)

console.log(myarr)

console.log(myarr.unshift(10)) //add 10 to first place and shift every element to right

console.log(myarr.shift(10)) // add 10 to lastposition and left shifts every elememt

console.log(myarr.slice(2, 6)) // give the elements from 2 to 6-1 which means last elment is not included

console.log(myarr.splice(2,6)) // same as slice but includes last elemnt and also make changes in main array

console.log(` Main arr changed after splice operation ${myarr}`)

console.log('===============================================================  ')

const newarr = [ 80 , 90 , 100]

const combarr = [...myarr,...newarr] // it can join two or more array in a single array

console.log(combarr)

// array of array
// arary can have many array inside it no.of array inside  array is depth

const Arr = [ 1, 2, [3, 4], 5 ,[ 6 ,[7, 8]],9 ]

console.log(Arr.flat(3)) // infinity bhi likh sakte hai

//================================Array of Object====================================
const arrobj = [ { name: "raghav"}, {age: 22},{id: 1}]

console.log(arrobj[1])


