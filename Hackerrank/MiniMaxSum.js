function miniMaxSum(arr) {
    // Write your code here
    //find minimum number
    //find maximum number
    //create minCount
    //create maxCount
    //since this is capped at five numbers, might make sense to just hard code
    //i will abstract for a better more scalable version
    //for loop to find min and max numbers
    //then a for loop to sum the min and max

    
    let minSum;
    let maxSum;
    let count = arr[0]
    let minNumber = arr[0];
    let maxNumber =arr[0];
    for(let i =1; i<arr.length; i++){
        if(arr[i]> maxNumber) maxNumber = arr[i]
        if(arr[i]< minNumber) minNumber = arr[i]
        count+= arr[i]
    }

    minSum = count -maxNumber
    maxSum = count - minNumber
    console.log(minSum, maxSum)
  
}

miniMaxSum([1,2,3,4,5])

