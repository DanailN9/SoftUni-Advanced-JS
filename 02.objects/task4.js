function solve(params) {

    let list = [];
    let letters = new Set();

    for (const line of params) {
        let [productName, price] = line.split(' : ');
        let product = `${productName}: ${Number(price)}`
        list.push(product);
        letters.add(line[0]);

    }

    let sorted = [...letters, ...list];
    sorted.sort((a,b) => a.localeCompare(b)).join(', ')

    for (const key of sorted) {
        if (key.lenght > 1) {
            console.log(`  ${key}`)
        } else {
            console.log(`${key}`)
        }
    }
    
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']	
)