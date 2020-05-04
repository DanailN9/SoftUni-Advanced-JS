function solve(params) {

    let obj = {};

    for (let i = 0; i < params.length; i+= 2) {
        obj[params[i]] = Number(params[i + 1])
        

    }

    return(obj)
    
}
console.log(solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));