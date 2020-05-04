function solve(params) {

    let rows = false;
    let colums = false;
    let arrRow = [];
    let arrCols = []

    const allEqual = arr => arr.every(v => v === arr[0]);

    for (const row of params) {
        arrRow.push(row.reduce((a,b) => a + b));
        
        if (allEqual(arrRow)) {
            rows = true
        } else {
            rows = false
        }

    }

    for (const cols of params) {
        let arr = [];
        arr.push(params[0][0], params[1][0],params[2][0]);
        arrCols.push(arr.reduce((a,b) => a + b));
        
        if (allEqual(arrCols)) {
            colums = true;
        } else {
            colums = false
        }

    }

    if (rows === true && colums === true) {
        console.log(true);
    } else {
        console.log(false);
    }
    
}
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])