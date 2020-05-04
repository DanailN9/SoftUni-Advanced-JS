function solve(params) {

    let parseData = params.reduce((juiceAcc,juiceKVP) => {
        let [juiceName, quon] = juiceKVP.split(' => ');

        if (juiceAcc.currentJuiceQuontity[juiceName]) {
            juiceAcc.currentJuiceQuontity[juiceName] += Number(quon);
        } else {
            juiceAcc.currentJuiceQuontity[juiceName] = Number(quon);
        }

        let bottleQ = Math.floor(juiceAcc.currentJuiceQuontity[juiceName] / 1000);
        if (bottleQ > 0) {
            juiceAcc.complitedJuices[juiceName] = bottleQ;
        } 
        

        return juiceAcc;
    }, {complitedJuices: {}, currentJuiceQuontity: {}}).complitedJuices;
    
    return parseData;
    
}
console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));