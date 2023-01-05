function birthday(s, d, m) {
    // Write your code here
    //check if m> d or m>s.length, because then this can't happen
    //window!!! two variables (i and j)
        //make a while loop (while j<s.length)
        //i starts at 0, j will need to start at s[m-1]
        //each count will go up on 1
        //need to check if numbers between i and j sum to the d
        //if the numbers = d then a new variable (count ++)
        //return count


        if(m>s.length) 
        {
            return undefined
        }
        let i = 0
        let j = m-1
        let arr = []
        while(j<s.length)
        {
            let sum = 0
            for(let x = i; x <=j; x++)
                {
                    sum+= s[x]
                }
            arr.push(sum)
            i++
            j++
        }
        console.log(arr.filter((x)=> x === d).length)
        return (arr.filter((x)=> x === d).length)
}


birthday([2,2,1,3,2],4,5)

