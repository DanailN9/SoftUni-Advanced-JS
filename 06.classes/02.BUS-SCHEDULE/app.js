function solve() {
    let stopId = 'depot'
    let info = document.getElementById('info')
    let arriveBtn = document.getElementById('arrive');
    let departBtn = document.getElementById('depart');
    let stopName = '';


    function depart() {
        let request = `https://judgetests.firebaseio.com/schedule/${stopId}.json`;

        fetch(request)
        .then(result => result.json())
        .then(data => res(data));

        function res(data) {
            console.log(data)
            stopName = data.name
            stopId = data.next;
            arriveBtn.disabled = false;
            departBtn.disabled = true;
            info.textContent = `Next stop ${data.name}`
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${stopName}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();