const obj1 = new Object() // singleton object

const mysym = Symbol("hello")// ek symbol ko object ke andar use karne ke liye pehle bhaar ek baar intialise karna padta haai



const user = {                      //non singleton object
    userId: 1,
    name: "Raghav",
    [mysym]: "hello",               //symbol ko object main  likhne ke liye []ka use karna padhta hai
    "full name": "raghav gupta",
    rollno: 10,
    isLoggedin: true
}

//Object.freeze(user) // isse use karne ke baad koi bhi changes nhi kare jasakte hai

user.userid = 12

const {isLoggedin: log} = user  //obejct destructuring abb aagr mujhe isslooggedin ko use karna hai main direct log likje ke access kar sakta hu

console.log(log)

console.log(user.userId)

console.log(user.hasOwnProperty("helo")) //finds the given key if present in object

console.log(user)

const obj2 = {
    name: "raghav",
    id: 23,
    obj3: {
         name: "nikita"
    }
}

const obj5 = Object.assign({}, user, obj2)  // combine 2 object or
const obj6 = {...user, ...obj2} // combines 2 objects with object spread

console.log(Object.keys(user))  // gives keys object
console.log(Object.values(user)) //gives values of object
console.log(Object.entries(user)) //gives object in form of array

console.log(obj2.obj3.name)


