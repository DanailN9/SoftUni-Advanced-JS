function lockedProfile() {
    const mainElement = document.getElementById('main');
    let lockingElement;

    mainElement.addEventListener('click', operations);

    function operations(e) {
        if (e.target.value === 'unlock' || 'lock') {
            lockingElement = e.target;
        } 

        let div = Array.from(lockingElement.parentElement.querySelectorAll('input[type=email]'));
        let userName = lockingElement.parentElement.querySelector('div[id]');
        div.push(lockingElement.parentElement.querySelector('input[type=text]'));

        if (lockingElement.value === 'unlock') {
            div.forEach(e => {
                e.disabled = false;
                e.readOnly = false;
            })

        } else if (lockingElement.value === 'lock') {
            div.forEach(e => {
                e.disabled = true;
                e.readOnly = true;
            })


        } else if (e.target.tagName === 'BUTTON') {
            let check = Array.from(e.target.parentElement.querySelectorAll('input[type=radio]'))
            check.forEach(el => {
                    if (el.value === 'unlock' && el.checked === true) {
                        if (e.target.textContent === 'Show more') {
                            userName.style.display = 'block';
                            e.target.textContent = 'Hide it';
                        } else {
                            userName.style.display = 'none';
                            e.target.textContent = 'Show more';
                        }
                    } 
            })
        }


    }
}