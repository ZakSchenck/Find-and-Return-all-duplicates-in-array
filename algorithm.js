const findDuplicates = function(nums) {
        let obj = {};
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] ? obj[nums[i]] += 1 : obj[nums[i]] = 1;
    }
    for (let key in obj)  {
        if (obj[key] > 1) {
            arr.push(key)
        }
    }
    const newArr = arr.map(num => parseInt(num))
    if (Object.values(obj) === 1) {
        return []
    }
    return newArr
};

findDuplicates([4,3,2,7,8,2,3,1])
// returns [2, 3[
