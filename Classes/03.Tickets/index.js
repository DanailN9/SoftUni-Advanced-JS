class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function sortingTickets() {
    let [arr, param] = arguments;
    let tickets = [];
    
    for (const el of arr) {
        let parameters = el.split('|')
        let ticket = new Ticket(...parameters)
        tickets.push(ticket)
    }

    if (param === 'price') {
        tickets.sort((a,b) => b[param] - a[param])
    } else {
        tickets.sort((a,b) => a[param].localeCompare(b[param]))
    }

    return tickets
}

sortingTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price')