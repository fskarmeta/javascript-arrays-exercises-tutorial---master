let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

let mergeTwoList = (list) => {
return [...list.filter(a => a % 2 !== 0), ...list.filter(a => a % 2 === 0)]
}


    

console.log(mergeTwoList(list_of_numbers))
