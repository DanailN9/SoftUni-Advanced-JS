function solve(params) {

    let list = new Set();

    for (const line of params) {
        list.add(line);
    }

   let sorted = [...list]
          .sort((a,b) => a.localeCompare(b))
          .sort((a,b) => a.length - b.length) 

          console.log(sorted)
    
}
solve(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']
)