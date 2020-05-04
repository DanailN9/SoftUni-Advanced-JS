function solve(params) {

    let laps = Number(params.pop());

    for (let i = 0; i < laps; i++) {
        let el = params.pop();
        params.unshift(el)
        
    }

    console.log(params.join(' '))
    
}
solve(['banana','orange','3','4','100000',])