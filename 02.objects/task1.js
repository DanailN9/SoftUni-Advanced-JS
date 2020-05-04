function solve(params) {

    let arr = [];

    for (let i = 0; i < params.length; i++) {
        let [name, level, items] = params[i].split(' / ');
        items = items ? items.split(', ') : [];
        arr.push({name, level: Number(level), items});
        
    }

    console.log(JSON.stringify(arr)); 
    
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
   'Hes / 1 / Desolator, Sentinel, Antara']);