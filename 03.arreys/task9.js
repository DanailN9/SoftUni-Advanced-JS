function solve(params) {

    let matrixNum = params.map((a) => a.split(' ').map(Number));

    let firstDig = [];
    let secondDig = [];

    for (let i = 0; i < matrixNum.length; i++) {
        firstDig.push(matrixNum[i][i]);
        secondDig.push(matrixNum[i][matrixNum[i].length - 1 - i]);
        
    }

    let resultOne = firstDig.reduce((a,b) => a + b);
    let resultTwo = secondDig.reduce((a,b) => a + b);


    if (resultOne === resultTwo) {
        arrange();
    } else {
        for (const el of matrixNum) {
            console.log(el.join(' '))
        }
    }


    function arrange() {
        
        let newMatrix = [];

        for (let j = 0; j < matrixNum.length; j++) {
            newMatrix[j] = []
            for (let i = 0; i < matrixNum[j].length; i++) {
                newMatrix[j][i] = resultOne;
            }
            newMatrix[j][j] = firstDig[j];
            newMatrix[j][newMatrix[j].length - 1 - j] = secondDig[j]

        }

        for (const el of newMatrix) {
            console.log(el.join(' '))
        }
   
    }
    
}
solve(['5 3 12 3 7',
       '11 4 23 2 5',
     '101 12 3 21 10',
       '1 4 5 2 2',
       '5 22 33 11 1']
)