function solve(params) {
    
    let step = Number(params.pop());

    for (let i = 0; i < params.length; i += step) {
        
        console.log(params[i])
    }

}
solve(['5','20','31','4','20','2']);