function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, idx1, idx2) {
       var temp = arr[idx1]
        arr[idx1]= arr[idx2]
        arr[idx2]= temp
     };
   
     // We are assuming the pivot is always the first element
     let pivot = arr[start];
     let swapIdx = start;
   
     for (let i = start + 1; i <= end; i++) {
       if (pivot > arr[i]) {
         swapIdx++;
         swap(arr, swapIdx, i);
       }
     }
   
     // Swap the pivot from the start the swapPoint
     swap(arr, start, swapIdx);
     return swapIdx;
   }
   
   
   function quickSort(arr, left = 0, right = arr.length -1){
       if(left < right){
           let pivotIndex = pivot(arr, left, right) //3
           //left
           quickSort(arr,left,pivotIndex-1);
           //right
           quickSort(arr,pivotIndex+1,right);
         }
        return arr;
   } 
              
   console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))
   