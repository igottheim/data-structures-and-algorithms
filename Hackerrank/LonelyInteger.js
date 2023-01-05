function lonelyinteger(a) {
    // Need an object/Map
    //for loop through the array and create the map with keys and value
    //for loop through the map to see which has a value of one

let objUniqueValue = {}
let uniqueValue
  for(let i =0; i<a.length ; i++)
  {
    !objUniqueValue[a[i]]? objUniqueValue[a[i]] = 1: objUniqueValue[a[i]]++

  }

  for(let key in objUniqueValue)
  {
    if(objUniqueValue[key]===1) uniqueValue = key
  }

  console.log(uniqueValue)
  return uniqueValue
}


lonelyinteger([1,2,3,4,4,3,2,1,5,])