function solve(prod, quon, price) {

    let total = quon * price / 1000;
    console.log(`I need \$${total.toFixed(2)} to buy ${(quon / 1000).toFixed(2)} kilograms ${prod}.`)

}

solve('apple', 1563, 2.35);