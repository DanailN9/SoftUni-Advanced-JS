function solve() {
    let arr = arguments;
    let types = {};

    for (const el of arr) {
        console.log(`${typeof(el)}: ${el}`);
        
        if (types[typeof(el)]) {
            types[typeof(el)] += 1;
        } else {
            types[typeof(el)] = 1;
        }
    }

    let sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (const el of sorted) {
        console.log(`${el[0]} = ${el[1]}`)
    }
}

solve('cat', 42, 5, function () { console.log('Hello world!');}
)