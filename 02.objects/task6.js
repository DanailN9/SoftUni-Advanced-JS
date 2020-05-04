function solve(params) {
    let list = {};

    for (const line of params) {
        let [system, component, subcomp] = line.split(' | ');

        if (!list.hasOwnProperty(system)) {
            list[system] = {};
            list[system][component] =  [];
            list[system][component].push(subcomp);
        } else {
            if (!list[system].hasOwnProperty(component)) {
                list[system][component] = [];
                list[system][component].push(subcomp);
            } else {
                list[system][component].push(subcomp);
            }
        }
    }

   let sorted = Object.entries(list)
                      .sort((a,b) => a[0].localeCompare(b[0]))
                      .sort((a,b) => Object.keys(b[1]).lenght - Object.keys(a[1]).lenght)

    console.log(sorted);
    
}
solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);