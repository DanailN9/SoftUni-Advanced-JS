function fibonacci() {
    let first = 0;
    let second = 1;
    let result = 0;

    return function fib() {
        result = first + second;
        first = second;
        second = result;
        return first
    }
}

console.log(fibonacci())