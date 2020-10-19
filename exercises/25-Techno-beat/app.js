
function lyricsGenerator(array) {
    let arr = []
    for (let i in array) {
        if (array[i] === 0) {
            arr.push("Boom")
        }
         else if  (array[i] === 1) {
            arr.push('Drop the base')
        if (array[i-1] === 1 && array[i-2] === 1) {
            arr.push("!!!Break the base!!!")
        }
    }
}
    return arr.toString("").replace(/[,]+/g," ") + " "
}

console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))