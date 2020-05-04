function solve(params) {

    let arr = params.map(a => JSON.parse(a));

    function table() {
         return `<table>\n${tr()}\n</table>`;
    }

    function tr() {
       return`<tr>${td()}</tr>`;
    }

    function td() {
        return `<td>${print()}</td>`;
    }

    function print() {
        for (const el of arr) {
            for (const key in el) {
                return el[key];
            }
            
        }
        
    }

    console.log(table())
    


    
    
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);	