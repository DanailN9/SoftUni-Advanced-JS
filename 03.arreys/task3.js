function solve(params) {

    let arr = [];

    for (let i = 0; i < params.length; i++) {
        if (params[i] === 'add') {
            arr.push(i + 1);
        } else {
            arr.pop()
        }
        
    }

    if (arr.length === 0) {
        console.log('Empty')
    } else {
        for (const el of arr) {
            console.log(el)
        }
    }
    
}
solve(['remove','remove','remove'])