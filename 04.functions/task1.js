function solve(arr, asd) {

    if (asd === 'asc') {
        arr.sort((a,b) => a > b );
    } else {
        arr.sort((a,b) => b > a);
    }

    console.log(arr)
       
}
solve([14.8, -7, 17, 6.5, -8], 'asc');