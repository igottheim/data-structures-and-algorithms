function countingSort(arr) {
   let arr1 = new Array(100).fill(0)

    for(let i = 0; i<arr.length; i++){
        arr1[arr[i]]+=1
    }

    return arr1
}



