function attachEvents() {
    const subBtn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const locationInput = document.getElementById('location');
    const divUpcoming = document.getElementById('upcoming');

    const divInfo = document.createElement('div');
    const spanCondition = document.createElement('span');
    const spanForecast = document.createElement('span');
       
    spanForecast.setAttribute('class', 'forecast-data');
    divInfo.setAttribute('class', 'forecast-info');
    spanCondition.setAttribute('class', 'condition');

    divUpcoming.appendChild(divInfo)

    subBtn.addEventListener('click', startApp);

    function startApp() {
        forecastDiv.style.display = 'block';
        
        fetch('https://judgetests.firebaseio.com/locations.json')
        .then(response => response.json())
        .then(data => {
            for (const i of data) {
                if (locationInput.value === i.name) {
                    currentLocation(i.code);
                    threeDayForecast(i.code);
                }
            }
        })
    }

    function currentLocation(key) {
        fetch(`https://judgetests.firebaseio.com/forecast/today/${key}.json`)
        .then(response => response.json())
        .then(data =>{
            renderCurrent(data)
        })
    }

    function threeDayForecast(key) {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${key}.json`)
        .then(response => response.json())
        .then(data =>{
            upcomingForecast(data)
        })
    }

    function renderCurrent(data) {
        const forecastObj = data.forecast;
        const conditions = forecastObj.condition;
        const symbol = symbols(conditions);
        
        currentDiv.appendChild(symbol)
        currentDiv.appendChild(spanCondition)
        
        for (const key in data) {
            
            if (key === 'name') {
                spanForecast.textContent = data[key];
                spanCondition.appendChild(spanForecast);

            } else {
                for (const key in forecastObj) {
                    const spanForecast = document.createElement('span');
                    spanForecast.setAttribute('class', 'forecast-data');

                    if (key === 'high') {
                        let high = key
                    } else if (key === 'low') {
                        spanForecast.textContent = `${forecastObj[key]}/${forecastObj.high}°`;
                        spanCondition.appendChild(spanForecast);


                    } else {
                        spanForecast.textContent = forecastObj[key];
                        spanCondition.appendChild(spanForecast);

                    }
                }
            }   
        }
    }

    function symbols(params) {
        let conditionSymbol = document.createElement('span');
        conditionSymbol.setAttribute('class', 'condition symbol');
        
        if (params === 'Sunny') {
          conditionSymbol.innerText = "☀";
          return conditionSymbol;

        } else if (params === 'Partly sunny') {
            conditionSymbol.innerText = '⛅';
            return conditionSymbol;

        } else if (params === 'Overcast') {
            conditionSymbol.innerText = '☁';
            return conditionSymbol;

        } else {
            conditionSymbol.innerText = '☂';
            return conditionSymbol;

        }
    }

    function upcomingSymbols(params) {
        let conditionSymbol = document.createElement('span');
        conditionSymbol.setAttribute('class', 'symbol');
        
        if (params === 'Sunny') {
          conditionSymbol.innerText = "☀";
          return conditionSymbol;

        } else if (params === 'Partly sunny') {
            conditionSymbol.innerText = '⛅';
            return conditionSymbol;

        } else if (params === 'Overcast') {
            conditionSymbol.innerText = '☁';
            return conditionSymbol;

        } else {
            conditionSymbol.innerText = '☂';
            return conditionSymbol;

        }
    }

    function upcomingForecast(data) {
        const forecastObj = data.forecast;
        
        for (const key in forecastObj) {
            const innerObj = forecastObj[key];   
            const conditions = innerObj.condition;
            const symbol = upcomingSymbols(conditions);
            const spanForecast = document.createElement('span');
            const spanUpcoming = document.createElement('span');
       
            spanUpcoming.setAttribute('class', 'upcoming');
            spanForecast.setAttribute('class', 'forecast-data');
            spanUpcoming.appendChild(symbol);
            divInfo.appendChild(spanUpcoming);

            for (const key in innerObj) {
                const spanForecast = document.createElement('span');
                spanForecast.setAttribute('class', 'forecast-data');

                if (key === 'low') {
                   spanForecast.textContent = innerObj.condition;
                   spanUpcoming.appendChild(spanForecast);

                } else if (key === 'condition') {
                   spanForecast.textContent = `${innerObj.low}/${innerObj.high}°`;
                   spanUpcoming.appendChild(spanForecast)

                }
            }
        }
    }
}

attachEvents();