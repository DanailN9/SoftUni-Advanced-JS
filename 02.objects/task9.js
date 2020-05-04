function solve(params) {

    let gladiatorPool = {};
    let name = '';
    let skill = '';
    let points = 0;
    let totalSkill = {};

    for (const line of params) {
        let lines = line.split(' ')

        if (lines.length > 3) {
            stats(lines);

        } else if (lines.length === 3) {
            pvp(lines);

        } else {
            print();
        }
    }

    function stats(a) {
        name = a[0];
        skill = a[2];
        points = Number(a[4]);

        if (!gladiatorPool[name]) {
            gladiatorPool[name] = {};
            gladiatorPool[name][skill] = points;
            totalSkill[name] = points;
        } else {

            if (!gladiatorPool[name][skill]) {
                gladiatorPool[name][skill] = points;
                totalSkill[name] += points;
            } else {
                if (gladiatorPool[name][skill][points] <= points) {
                    gladiatorPool[name][skill] = points;
                    totalSkill[name] -= gladiatorPool[name][skill][points];
                    totalSkill[name] += points;
                }
            }
        }
    }

    function pvp(b) {
        let first = b[0];
        let second =b[2];

        if (gladiatorPool[first] && gladiatorPool[second]) {
            for (const skill in gladiatorPool[first]) {
                for (const skillz in gladiatorPool[second]) {
                    
                    if (skill === skillz) {

                        if (totalSkill[first] > totalSkill[second]) {
                            delete gladiatorPool[second];
                            delete totalSkill[second];
                            break;

                        } else {
                            delete gladiatorPool[first];
                            delete totalSkill[first]
                            break;
                        }
                    }
                }
            }
        } 
    }

    function print() {
        let sorted = Object.entries(totalSkill).sort((a,b) => b[1] - a[1]);
        
        for (const el of sorted) {
            let sortedSkill = Object.entries(gladiatorPool[el[0]]).sort((a,b) => a[1] < b[1]);

            console.log(`${el[0]}: ${el[1]} skill`);
        
            for (let i = 0; i < sortedSkill.length; i++) {
                console.log(`- ${sortedSkill[i][0]} <!> ${sortedSkill[i][1]}`);
            }
        }
    }

}
solve([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
  ])