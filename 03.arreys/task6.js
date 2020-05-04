function solve(params) {

    let sorted = params.sort((a,b) => a.length > b.length)


    for (const el of sorted) {
        console.log(el)
    }
}
solve([ 'alpha', 'beta', 'gamma' ])