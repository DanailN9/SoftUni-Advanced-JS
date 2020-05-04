function solve(params) {

    let list = {};

    for (const line of params) {
        let [brand, model, quon] = line.split(' | ');
        quon = Number(quon);

        if (!list.hasOwnProperty(brand)) {
            list[brand] ={};
            list[brand][model] = quon;
        } else {
            if (!list[brand].hasOwnProperty(model)) {
                list[brand][model] = quon;
            } else {
                list[brand][model] += quon;
            }
        }
    }

    for (const key in list) {
        console.log(key);
        for (const el in list[key]) {
            console.log(`###${el} -> ${list[key][el]}`)
        }
    
    }
    
    
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);