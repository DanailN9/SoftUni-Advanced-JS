let solution = (function () {

    function add(a,b) {
        return [a[0] + a[1], b[0] + b[1]];
    }

    function multiply(a,b) {
        return [a[0]*b, a[1]*b];
    }

    function length(a) {
        return Math.sqrt(a[0]*a[0] + a[1]*a[1]);
    }

    function dot(a,b) {
        return a[0]*a[1] + b[0]*b[1];
    }

    function cross(a,b) {
        return a[0]*b[1] - a[1]*b[0];
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
    
})();
console.log(solution.add([5.43, -1], [1, 31]));