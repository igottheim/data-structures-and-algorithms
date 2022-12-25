function validAnagram(str1, str2){
    
    if(str1.length !== str2.length)
   {
       return false
   }
   
   let frequencyCounter1 = {}
   let frequencyCounter2 = {}

   for(let i = 0; i< str1.length; i++)
       
   {
       let x = str1.charAt(i).toLowerCase()
       frequencyCounter1[x]? frequencyCounter1[x]+=1: frequencyCounter1[x] =1
   }

    for(let i = 0; i< str2.length; i++)
       
   {
       let x = str2.charAt(i).toLowerCase()
       frequencyCounter2[x]? frequencyCounter2[x]+=1: frequencyCounter2[x] =1
   }
     console.log(frequencyCounter1)
     console.log(frequencyCounter2)


   for(let key in frequencyCounter1)
       {
           if(!(key in frequencyCounter2))
           {
               return false
           }
           if(frequencyCounter2[key]!== frequencyCounter1[key])
           {
               return false
           }
       }
   return true
}

validAnagram("goyeobe", "goodbye")