function generateReport() {
    const output = document.getElementById('output');
    const boxes = [...document.querySelectorAll('th > [name]')];
    const table = [...document.querySelectorAll('tbody > tr')];
    let finalArr = [];
    let bigArr = table.map(e => e.textContent);
    let arrFormated = [];
    let checkedBoxes = boxes.reduce((acc, e) => {
        if (e.checked === true) {
            let name = e.name;
            acc.push({[name]: boxes.indexOf(e)})
        }

        return acc;
    }, []);
   
    for (const el of bigArr) {
        let line = el.split('\n ')
        .map(e => e.trim())
        .filter(e => e != '');

        arrFormated.push(line);
    }

    function checked () {
        for (const el of arrFormated) {
            if (el.length === 6) {
                el.splice(4, 0 , '');
            }
            
            let elements = el.reduce((acc, e) => {
                checkedBoxes.forEach(line => {
                    if (el.indexOf(e) === Object.values(line)[0]) {
                        acc[Object.keys(line)[0]] = e;

                    }
                })
                return acc

            }, {})

            finalArr.push(elements)
        }
    }

    checked()

    output.textContent = JSON.stringify(finalArr);
}