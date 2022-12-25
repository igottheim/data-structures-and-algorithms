function countUniqueValues(arr){
    // console.log(arr)
     arr.sort(function(a, b) {
   return a - b;
     });
 
    //  console.log(arr)
     let left = 0
    
 
    for(let right =1; right<arr.length; right++)
     {
        
         if(arr[left]!==arr[right])
         {
             left ++
             arr[left] = arr[right]
             
         }
        
       
     }
 
         if(left ===0)
         {
             return left
         }
          else
         {
             return left +1
         }
 }
 
 console.log(countUniqueValues([1,2,3,7,99,7,3,99,6]))