let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(matrix) {
    let obj = {totalSlots: 0, availableSlots: 0, occupiedSlots: 0}
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === 1) {
                obj.occupiedSlots++
                obj.totalSlots++
            }
            if (matrix[i][j] === 2) {
                obj.availableSlots++
                obj.totalSlots++
            }
        }
    }
    return obj
}

console.log(getParkingLotState(parking_state))