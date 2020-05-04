function solve(params) {

    let num = Number(params[0]);

    let obj = {

        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => x - (x * 20  / 100)

    }


    for (let i = 1; i < params.length; i++) {
        num = obj[params[i]](num);
        console.log(num)
        
    }


    
}
solve(['32', 'dice', 'chop', 'chop', 'chop', 'chop']);