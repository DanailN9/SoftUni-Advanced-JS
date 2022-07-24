function solve() {
  const input = document.querySelector('h1').nextElementSibling;
  const objInput = JSON.parse(input.value)[0];
  const [createBtn, buyBtn] = document.querySelectorAll('button');
  const bodyElement = document.getElementsByTagName('tbody')[0];
  const outputElement = buyBtn.previousElementSibling;


  createBtn.addEventListener('click', operations);

  function operations() {
    let trElement = document.createElement('tr');

    for (const key in objInput) {
      let tdElement = document.createElement('td');
      
      if (key === 'img') {

        let imgElement = document.createElement('img');
        imgElement.src = objInput[key];
        tdElement.appendChild(imgElement);
        trElement.appendChild(tdElement);

      } 
    }

    for (const key in objInput) {
      if (key !== 'img') {

        let tdElement = document.createElement('td');
        let parElement = document.createElement('p');
        parElement.textContent = objInput[key];
        tdElement.appendChild(parElement);
        trElement.appendChild(tdElement);

      }
    }

    let tdElement = document.createElement('td');
    let inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    tdElement.appendChild(inputElement);
    trElement.appendChild(tdElement);
    bodyElement.appendChild(trElement);

  };

  buyBtn.addEventListener('click', buyOperations);

  function buyOperations() {
    let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));

    checkboxes.forEach(e => {
      if (e.checked) {
        let arrElements = Array.from(e.parentElement.parentElement.childNodes)
        sorting(arrElements);
      }

    })
  }

  function sorting(arr) {
    let finalObj = {};
    let price = 0;
    let names = [];
    let factor = 0;
    let counter = 0;

    arr.forEach(e => {
      if (e.textContent) {
        console.log(e.textContent)
        if (counter === 0) {
          names.push(e.textContent);
          counter += 1;

        } else if (counter === 1) {
          price += Number(e.textContent);
          counter += 1;

        } else {
          factor += Number(e.textContent);

        }
      }
    })

    finalObj['Bought furniture'] = names;
    finalObj['Total price'] = price;
    finalObj['Average decoration factor'] = factor;

    outputElement.textContent = JSON.stringify(objInput)


  }
}