

var myNumbers = [23,234,345,4356234,243,43,56,2];

let myFunction = (x) => {return x*3}
let newArray = myNumbers.map(a => myFunction(a)) 

console.log(newArray);