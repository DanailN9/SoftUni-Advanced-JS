function test() {
    let sum = 0;

    function add(addend) {
        sum += addend;

        return add;
    }

    add.toString = function() {
        return sum;
    }

    return add;
}

const add = test();

console.log(add(1)(3).toString())