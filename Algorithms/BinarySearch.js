function binarySearch(arr, val){
    let left = 0
    let right = arr.length-1
    let middle = Math.floor((left+right)/2)
    
    
        while (arr[middle]!==val && left<=right)
            {
                if(val<arr[middle])
                {
                    right = middle-1
                }
                else
                {
                    left = middle+1
                }
    
                middle = Math.floor((left+right)/2)
                // console.log(middle)
            }
    
        if (arr[middle]===val)
        {
            return middle
        }
    
        return -1
    
        
      
    }
    
    binarySearch([2,5,6,9,13,15,28,30],9)
    