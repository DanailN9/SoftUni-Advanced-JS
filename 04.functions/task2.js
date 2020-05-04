function solve(params) {

    let arg = solve.arguments;
    let types = {};

    for (const el of arg) {
        console.log(`${typeof el}: ${el}`)

        if (!types[typeof el]) {
            types[typeof el] = 1;
        } else {
            types[typeof el] += 1;
        }
    }

    let sorted = Object.entries(types);
    sorted.sort((a,b) => b[1] - a[1]);
    
    for (const el of sorted) {
        console.log(`${el[0]} = ${el[1]}`)
    }
}
solve({ name: 'bob'}, 3.333, 9.999)