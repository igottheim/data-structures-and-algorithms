function productOfArray(array){

    if(array.length===0) return null
    if(array.length ===1) return array[0]


    return array[0] * productOfArray(array.slice(1))

}

console.log(productOfArray([4]))