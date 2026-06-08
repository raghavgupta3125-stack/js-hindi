function one(){
    console.log("one");
}

function two(numb1 , numb2){
    return numb1 + numb2
}

console.log(two(2,3))
console.log(two())  //yaha par undefined aayega kyuki humne function ke andar koi value pass nhi ki hai aur function ke andar return statement hai to wo undefined return karega

function three(...numb){
    console.log(numb)  //yaha par array ke form main value aayegi kyuki humne rest parameter(...) use kiya hai");
   
}
three(1,2,3,4,5)


// ================== function of array
const arr = [1,2,3,4,5]
function arrr(getArray) {
    return getArray
}
console.log(arrr(arr))
//=======================function of objects
const user = {                      //non singleton object
    userId: 1,
    name: "Raghav",
    
    "full name": "raghav gupta",
    rollno: 10,
    isLoggedin: true
}

function obj(getobj){
    return getobj
}

console.log(obj(user))