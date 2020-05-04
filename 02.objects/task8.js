function solve(params) {

    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    let uniques = new Set();

    for (let i = 0; i < params.length; i++) {
        let arr = JSON.parse(params[i]).map(Number);
        uniques.add(arr.sort((a, b) => b - a).join(', '));

    }
    let list = [];

    for (const el of uniques) {
        let collect = el.split(',');
        let toStore = `[${collect.join(',')}]`;
        list.push(toStore)
    }

    list.sort((a, b) => customSort(a, b, arrays));

    for (const line of list) {
        console.log(line)
    }
}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
);