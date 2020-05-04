function solve() {

    let size = document.querySelectorAll('tbody tr').length;
    let buttons = document.querySelectorAll('exercise , button');

    let validSudoko = true;

    buttons[0].addEventListener('click', (e) => {
        let cells = Array.from(document.querySelectorAll('tbody input')).map(x => x.value);
        
        let parcedCells = [];

        for (let i = 0; i < size; i++) {
            parcedCells.push([...cells.slice(i * size, (i + 1) * size)]);
        }

        for (let j = 0; j < size; j++) {
            validSudoko = validSudoko ? (new Set(parcedCells[j])).size === size : false;
        }

        for (let col = 0; col < parcedCells.length; col++) {
            let temp = [];
            for (let row = 0; row < parcedCells.length; row++) {
                temp.push(parcedCells[row][cal]);

                validSudoko = validSudoko ? (new Set(temp)).size === size : false;
                
            }
            
        }
        validSudoko = true;
    })
}