function getInfo() {
    let stop = document.getElementById('stopId').value;
    let btn = document.getElementById('submit');
    let request = `https://judgetests.firebaseio.com/businfo/${stop}.json`;
    let stopName = document.getElementById('stopName');
    let busess = document.getElementById('buses');
    let stops = document.createElement('li');
    
    btn.addEventListener('click', print());
    
    function print() {
        fetch(request)
        .then(response => response.json())
        .then(data => res(data))
        
    }

    function res(data) {
        busess.innerText = '';

    
        if (data.error === "Permission denied") {
            return stopName.innerHTML = 'Error';

        }

        stopName.innerHTML = data.name;
        let busNums = Object.entries(data.buses);

        for (const arr of busNums) {
            stops = document.createElement('li')
            stops.textContent = `Bus ${arr[0]} arrives in ${arr[1]} minutes`
            busess.appendChild(stops)
        }

    }

}