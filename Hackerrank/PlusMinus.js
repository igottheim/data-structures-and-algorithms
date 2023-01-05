function plusMinus(arr) {
    // Write your code here
    //create count of negative numbers
    //create count of 0's
    //create count of positive numbers
    //for each count, divide by total length of array 
    //convert each count fraction to six decimal places 
    //console.log each of the fractions (positive, then negative, then zero)
    //edge cases? none that i can think off
let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

for(let i= 0; i<arr.length; i++)
{
    if(arr[i]<0) negativeCount+=1
    else if(arr[i]>0) positiveCount +=1
    else zeroCount +=1

}

console.log((positiveCount/arr.length).toFixed(6))
console.log((negativeCount/arr.length).toFixed(6))
console.log((zeroCount/arr.length).toFixed(6))


}

plusMinus([1,1,0,-1,-1,.5])

