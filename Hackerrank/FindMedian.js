
function findMedian(arr) {
    let sortedArray = arr.sort(function handleSort(a,b){
        return a-b
    })
    
   let middleIndex =  Math.floor(arr.length/2)
    
   console.log(sortedArray, middleIndex)

   console.log(arr[middleIndex])
}

findMedian([5,3,1,2,4,5,4])