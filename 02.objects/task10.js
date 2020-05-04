function solve(kingdoms, battle) {

    let armys = {};

    for (const line of kingdoms) {
        let arr = Object.entries(line); 
        
        create(arr);
    } 

    function create(a) {
        let kingdomName = a[0][1];
        let generalName = a[1][1];
        let armySize = a[2][1];

        if (!armys[kingdomName]) {
            armys[kingdomName] = {};
            armys[kingdomName][generalName] = armySize;
        } else {
            if (!armys[kingdomName][generalName]) {
                armys[kingdomName][generalName] = armySize;
            } else {
                armys[kingdomName][generalName] += armySize;
            }
        }
    }

    for (const lines of battle) {
        let firstArmy = armys[lines[0]][lines[1]];
        let secondArmy = armys[lines[2]][lines[3]];

        if (firstArmy > secondArmy) {
            armys[lines[0]][lines[1]] += firstArmy * 0.1;
            armys[lines[2]][lines[3]] -= secondArmy * 0.1;
        
        } else if (firstArmy < secondArmy) {
            armys[lines[0]][lines[1]] -= firstArmy * 0.1;
            armys[lines[2]][lines[3]] += secondArmy * 0.1;
        }
        
    }

    console.log(armys)
    
}
solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Stonegate", "Ulric", "Stonegate", "Doran"],
["Stonegate", "Doran", "Maiden Way", "Merek"],
["Stonegate", "Ulric", "Maiden Way", "Merek"],
["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);