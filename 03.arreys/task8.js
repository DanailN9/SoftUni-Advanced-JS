function solve(params) {

    let field = [[false, false, false],
                 [false, false, false],
                 [false, false, false]];
        
    let counter = 0; 
    let chess = false;
    let freeSpace = true;   
    const allEqual = arr => arr.every(v => v === arr[0]);         

    for (let i = 0; i < params.length; i++) {
        let comand = params[i].split(' ').map(Number);
        let row = comand[0];
        let place = comand[1];

        if (counter === i) {

            if (field[row][place] !== false) {
                console.log('This place is already taken. Please choose another!');
                counter++;
                continue;
            }
            field[row][place] = 'X';
            counter += 2;
        } else {

            if (field[row][place] !== false) {
                console.log('This place is already taken. Please choose another!');
                counter++;
                continue;
            }
            field[row][place] = 'O';
        }

        checkerRows();
        checkerCols();
        checkerAngles();
        checkerFree()

        if (chess) {
            for (const el of field) {
                console.log(el.join('\t'));
            }
            break;
        }

        if (freeSpace === false) {
            console.log('The game ended! Nobody wins :(');
            for (const el of field) {
                console.log(el.join("\t"));
            }
            break;
        }
        
    }

    function checkerRows() {
        for (const rows of field) {

            if (allEqual(rows)) {

                if (rows[0] === 'X') {
                    console.log(`Player ${'X'} wins!`);
                    chess = true;
                    return chess;

                } else if (rows[0] === 'O') {
                    console.log(`Player ${'O'} wins!`);
                    chess = true;
                    return chess;
                } else {
                    continue;
                }
            }
        }



    }

    function checkerCols() {
        for (let i = 0; i < field.length; i++) {
            let cols = [];
            cols.push(field[0][i],field[1][i], field[2][i]);
            
            if (allEqual(cols)) {
                
                if (cols[0] === 'X') {
                    console.log(`Player ${'X'} wins!`);
                    chess = true;
                    return chess;
                } else if (cols[0] === 'O') {
                    console.log(`Player ${'O'} wins!`);
                    chess = true;
                    return chess;
                } else {
                    continue;
                }
            }
            
        }
    }

    function checkerAngles() {
        let angleOne = [];
        let angleTwo = [];
        angleOne.push(field[0][0],field[1][1],field[2][2]);
        angleTwo.push(field[0][2],field[1][1],field[2][0]);

        if (allEqual(angleOne) || allEqual(angleTwo)) {
            if (allEqual(angleOne)) {

                if (angleOne[0] === 'X') {
                    console.log(`Player ${'X'} wins!`);
                    chess = true;
                    return chess;    
                } else if (angleOne[0] === 'O') {
                    console.log(`Player ${'O'} wins!`);
                    chess = true;
                    return chess;    
                }

            } else {

                if (angleTwo[0] === 'X') {
                    console.log(`Player ${'X'} wins`);
                    chess = true;
                    return chess;   
                } else if (angleTwo[0] === 'O') {
                    console.log(`Player ${'O'} wins`);
                    chess = true;
                    return chess;                 
                } 
            }
        } 
    }

    function checkerFree() {
        let counter = 0;

        for (const el of field) {
            let free = true;
            if (el.includes(false)) {
                free = true;
            } else {
                free = false
                counter++;
            }

        }

        if (counter === 3) {
            freeSpace = false;
        }

        return freeSpace;
    }
    
}
solve([
'0 0',
'0 0',
'1 1',
'0 1',
'1 2',
'0 2',
'2 2',
'1 2',
'2 2',
'2 1',
])