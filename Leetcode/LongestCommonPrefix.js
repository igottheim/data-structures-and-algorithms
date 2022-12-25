/**
 * @param {string[]} strs
 * @return {string}
 */

 function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    
    for (let i = 0; i < strs[0].length; i++) {
      for (let str of strs) {
        
        if (str[i] !== strs[0][i]) {
          console.log("made it here")
            console.log(str)
          return str.slice(0, i);
        }
      }
    }
  
      console.log("made it")
    return strs[0];
  }
  
  longestCommonPrefix(["flower","flow","flight"])