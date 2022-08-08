function solve() {
    const addBtn = document.getElementById('add');
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const orange = document.getElementsByClassName('orange')[0];
    const start = document.createElement('button');
    const del = document.createElement('button');
    const yellow = document.getElementById('in-progress');
    const openArticle = orange.parentElement.nextElementSibling;

    addBtn.addEventListener('click', validator);
    start.addEventListener('click', startFunk);
    del.addEventListener('click', deleteFunk);

    function validator(e) {
        e.preventDefault()
        
        if (task.value && description.value && date.value) {
           createOrange();
        }
    }

    function createOrange() {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const par1 = document.createElement('p');
        const par2 = document.createElement('p');
        h3.textContent = task.value;
        par1.textContent = `Description: ${description.value}`;
        par2.textContent = `Due Date: ${date.value}`;

        let flex = document.createElement('div');
        flex.classList.add('flex');
        start.classList.add('green');
        start.textContent = 'Start';
        del.classList.add('red');
        del.textContent = 'Delete';

        flex.appendChild(start);
        flex.appendChild(del)

        article.appendChild(h3)
        article.appendChild(par1)
        article.appendChild(par2)
        article.appendChild(flex)
        openArticle.appendChild(article)

        console.log('orange')
        
    }

    function startFunk(e) {
        if (e.target.classList[0] === 'green') {
            let article = openArticle.children[0];
            yellow.appendChild(article);
            e.target.textContent = 'Finish';
            e.target.classList = 'orange';
            console.log(yellow)

        } else {
            console.log('pishka')
        }
    }

    function deleteFunk(e) {
        let article = del.parentElement.parentElement;
        let div = article.parentElement;
        console.log(div)
        div.remove(article)
        start.classList = 'green';
        
    }
    
}

