/**
 * @param {string} s
 * @return {number}
 */

 var romanToInt = function(s) {
    let count = 0
    s=s.toUpperCase()
   let roman = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    for(i=0; i<=s.length-2; i++)
        {
            if(s[i]==="I"&& s[i+1]=="V"
             ||s[i]==="I"&& s[i+1]=="X"
             ||s[i]==="X"&& s[i+1]=="L"
             ||s[i]==="X" && s[i+1]=="C"
            ||s[i]==="C"&& s[i+1]=="D"
             ||s[i]==="C"&& s[i+1]=="M")
            {
            count = count -roman[s[i]]
            }
            else
            {
                count = count +roman[s[i]]
            }

            console.log(s[i], count)
        }
        count+= roman[s[s.length-1]]
        console.log(s[s.length-1])
         
    return count
};


romanToInt("MCMXCIV")
