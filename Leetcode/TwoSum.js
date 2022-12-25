
var twoSum = function(nums, target) {
    let matchMap = {};
    for(let i = 0; i < nums.length; i++){
     let compliment = target - nums[i];
        if(compliment in matchMap){
            return [matchMap[compliment], i]
        }
        matchMap[nums[i]] = i;
    }

    return "No Match"
};



console.log(twoSum([2,7,11,14],18))
