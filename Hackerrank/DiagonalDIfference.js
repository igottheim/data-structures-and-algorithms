function diagonalDifference(arr) {
   let d1 = 0
   let d2 = 0
    let j = arr.length -1

   for(let i = 0; i<arr.length;i++){

        d1+= arr[i][i]
        d2+= arr[i][j]
        j--
   }

  return(Math.abs(d1-d2))

}

diagonalDifference([[1,2,3],[4,5,6], [9,8,9]])
