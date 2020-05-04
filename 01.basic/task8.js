function solve(params) {

    let total = 0

    for (const lines of params) {

        let prices = {

            'caffeine': 0.80,
            'decaf': 0.90,
            'tea': 0.80,
            'sugar': 0.10,

        }

        let arr = lines.split(', ');
        let money = Number(arr[0]);
        let product = arr[1];
        let sum = 0;
        let milkPrice = 0
        let sugar = Number(arr.pop());
        let type = '';
        if (sugar != 0) {
            sum += 0.10;
        } 

        if (product === 'coffee') {
            let type = arr[2];
            sum += prices[type];
        } else {
            sum += prices[product];
        }
        
        if (arr[2] === 'milk' || arr[3] === 'milk') {
            let addOn = arr[3];
            if (type === 'decaf') {
               milkPrice = 0.10;
            } else {
               milkPrice = 0.10;
            }
            sum += milkPrice;
        }

       let change = 0;
       let needed = 0;

       if (money >= sum) {
           change = money - sum;
           total += sum
           console.log(`You ordered ${product}. Price: $${sum.toFixed(2)} Change: $${change.toFixed(2)}`)
       } else {
           needed = sum - money;
           console.log(`Not enough money for ${product}. Need $${needed.toFixed(2)} more.`)
       }


    }
    
    console.log(`Income Report: $${total.toFixed(2)}`)
}
solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'])