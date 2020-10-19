// Code goes here

let matrixBuilder = (n) => {
    let matrix = []
    for (i = 0; i < n; i++) {
        matrix[i] = [];
        for (j= 0; j < n; j++) {
            matrix[i][j] = 1 // Math.floor(Math.random()*2) si quieres random
        }
    }
    return matrix
}

// do not change anything from this line down
console.log(matrixBuilder(5))