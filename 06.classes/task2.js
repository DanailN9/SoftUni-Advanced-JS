function solve(arr, desc) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let unsorted = [];

    for (const lines of arr) {
        let [destination, price, status] = lines.split('|');
        price = Number(price);

        unsorted.push(new Ticket(destination, price, status));
    }

    let sorted = {};

    if (desc === 'destination') {
        sorted = unsorted.sort((a,b) => a.destination.localeCompare(b.destination));
    } else if (desc === 'price') {
        sorted = unsorted.sort((a,b) => a.price - b.price);
    } else {
        sorted = unsorted.sort((a,b) => a.status.localeCompare(b.status));
    }

    return sorted;

}
solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)