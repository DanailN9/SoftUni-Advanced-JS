function solve(n) {

    let arr = n.toString().split('').map(Number);
    let trueOrFalse = new Set (arr);
    let sum = arr.reduce((a,b) => a + b);
    let type = true;
    
    if (trueOrFalse.size > 1) {
       type = false;
    }

    console.log(type);
    console.log(sum)
}

solve(1234);