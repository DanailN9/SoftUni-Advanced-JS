function solve(params) {
    let [nums, str] = arguments;
    
    if (str === 'asc') {
        nums.sort((a, b) => a - b)
    } else {
        nums.sort((a, b) => b - a)
    }

    return nums
    
}

solve([14, 7, 17, 6, 8], 'desc')