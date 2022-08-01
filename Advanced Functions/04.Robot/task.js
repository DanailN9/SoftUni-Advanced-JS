function solve() {
    let container = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

    };
    let listOfIngridients = {
        apple: {
            carbohydrate: 1,
            flavour: 2.
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    function close () {
        let arr = arguments[0].split(' ');
    
        if (arr[0] === 'restock') {
            return restock(arr, container);

        } else if (arr[0] === 'prepare') {
            return prepare(listOfIngridients, arr, container);

        } else {
            return `protein=${container.protein} carbohydrate=${container.carbohydrate} fat=${container.fat} flavour=${container.flavour}`;

        }
    }

    return close;
    
}

function prepare (list , arr, container) {
    let meal = arr[1];
    let quontity = Number(arr[2]);
    let recept = list[meal];
    let bool = true;
    
    for (const key in recept) {
        let ingNumb = Number(recept[key]) * quontity;

        if (ingNumb >= Number(container[key])) {
            bool = false;
            return `Error: not enough ${key} in stock`;
        }
    }

    for (const key in recept) {
        if (bool) {
            container[key] -= Number(recept[key]) * quontity;
            console.log(container)
        }
    }

    if (bool) {
        return 'Success'
    }


    
}

function restock(arr, container) {
    let ing = arr[1];
    let quontity = Number(arr[2]);
    container[ing] += quontity;

    return 'Success'
}

let robot = solve();

console.log(robot('restock flavour 50'));
console.log(robot('prepare lemonade 4'));
console.log(robot('restock carbohydrate 10'));
console.log(robot('prepare apple 1'));