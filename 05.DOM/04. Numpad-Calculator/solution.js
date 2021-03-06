function solve() {

    let pad = document.getElementsByClassName('keys')[0];
    let output = document.getElementById('expressionOutput');
    let clear = document.getElementsByClassName('clear')[0];
    let result = document.getElementById('resultOutput');

    let operators = ['+','-','/','*'];
    let operations = { 
        '+':(numOne, numTwo) => Number(numOne) + Number(numTwo),
        '-':(numOne, numTwo) => Number(numOne) - Number(numTwo),
        '/':(numOne, numTwo) => Number(numOne) / Number(numTwo),
        '*':(numOne, numTwo) => Number(numOne) * Number(numTwo),
    }   

    clear.addEventListener('click', () => {
        output.innerHTML = '';
        result.innerHTML = '';
    })


    pad.addEventListener('click', ({target: {value}}) => {

        if (!value) {
            return;
        }

        if (value === '=') {
            let params = output.innerHTML.split(' ').filter(x => x !== '');

            if(params[2] !== undefined){
                result.innerHTML = operations[params[1]](params[0], params[2]);
                return;
            }
            
            result.innerHTML = 'NaN';
            return;

        }

        if (operators.includes(value)) {
            output.innerHTML = output.innerHTML + ` ${value} `;
            return;
        }
        output.innerHTML = output.innerHTML + value
        console.log(value)
    })

}