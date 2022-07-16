function solve() {
  const btn = document.getElementById('btnSend');
  const inputText = JSON.parse(document.querySelector('#inputs textarea').value);
  const arrayText = inputText.map(e => e.split(/(?: - )|(?:, )/g));
  const bestRestorantElement = document.querySelector('#bestRestaurant>p');
  const bestEmploy = document.querySelector('#workers>p');

  let objRestorant = findBestRestorant();
  let mostMoney = 0;
  let bestRestorant = {};

    btn.addEventListener('click', operations);

    function operations() {
      let restName = Object.keys(bestRestorant)[0];
      let sorted = [];

      for (const el of objRestorant[restName]) {
        sorted.push(Object.entries(el));
      } 

      sorted.forEach(e => {
        if (e[0][0] === 'counter') {
          sorted.splice(sorted.indexOf(e), 1)
        }
      })

      sorted.sort((a, b) => b[0][1] - a[0][1])

      bestRestorantElement.textContent = `Name: ${restName} Average Salary: ${bestRestorant[restName]} Best Salary: ${sorted[0][0][1].toFixed(2)}`
      sorted.forEach(e => bestEmploy.textContent += `Name: ${e[0][0]} With Salary: ${e[0][1]} `);
      console.log(bestRestorantElement)

    }

    function findBestRestorant() {
      let restorants = {};

      for (const el of arrayText) {
        let restorant = el.shift();
        let counter = 0;
        let workers = el.reduce((acc, e) => {
          let [worker, wage] = e.split(' ');
          counter += Number(wage);
  
          acc.push({
            [worker]:Number(wage)
          });
  
          return acc

        },[]);
  
        workers.push({
          counter: counter
        });

        let arr = Object.keys(restorants).find(r => r === restorant);
        
        if (arr === restorant) {
          restorants[restorant].push(...workers);

        } else {
          restorants[restorant] = workers;

        }
      }

      return restorants;
    }

    for (const key in objRestorant) {
      let el = objRestorant[key].map(e => Object.entries(e));
      let devideElement = el.reduce((acc, e) => {
        if (e[0][0] !== 'counter') {
          acc += 1;
        }

        return acc;
      }, 0)
      let money = el.reduce((acc, e) => {
        if (e[0][0] === 'counter') {
          acc += e[0][1]
        }

        return acc;
      }, 0);

      money = money / devideElement;

      if (money > mostMoney) {
        mostMoney = Number(money.toFixed(2));
        bestRestorant = {};
        bestRestorant[key] = Number(money.toFixed(2));

      } 
    }
}