function attachEventsListeners() {
    const elements = Array.from(document.querySelectorAll('div > input[type = text'));
    const mainElement = document.getElementsByTagName('main')[0];
    let objElements = {};
   
    mainElement.addEventListener('click', operations);

    function operations(e) {
        elements.forEach(el => {
            objElements[el.id] = el.value;

        });

        if (e.target.type === 'button') {
            let btn = e.target
            let key = btn.previousElementSibling.id;
            let num = Number(objElements[key]);
            converter(key, num);
        }
    }
    
    function converter(element, numElement) {
        if (element === 'days') {
            days(numElement);
        } else if (element === 'hours') {
            hours(numElement);
        } else if (element === 'minutes') {
            minutes(numElement)
        } else {
            seconds(numElement)
        }
    }

    function days(num) {
        elements.forEach(e => {
            if (e.id === 'hours') {
                e.value = num * 24;
            } else if (e.id === 'minutes') {
                e.value = num * 1440;
            } else if (e.id === 'seconds') {
                e.value = num * 86400
            }
        })
    }

    function hours(num) {
        elements.forEach(e => {
            if (e.id === 'days') {
                e.value = num / 24;
            } else if (e.id === 'minutes') {
                e.value = num * 60;
            } else if (e.id === 'seconds') {
                e.value = num * 3600
            }
        })
    }

    function minutes(num) {
        elements.forEach(e => {
            if (e.id === 'days') {
                e.value = num / 1440;
            } else if (e.id === 'hours') {
                e.value = num / 60;
            } else if (e.id === 'seconds') {
                e.value = num * 60
            }
        })
    }

    function seconds(num) {
        elements.forEach(e => {
            if (e.id === 'days') {
                e.value = num / 86400;
            } else if (e.id === 'hours') {
                e.value = num / 3600;
            } else if (e.id === 'minutes') {
                e.value = num / 60
            }
        })
    }
    
}