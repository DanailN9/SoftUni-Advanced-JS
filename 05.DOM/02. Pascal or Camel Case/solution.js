function solve() {
  const inputArea = document.getElementById('text').value.toLowerCase();
  const convention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  let arrOfInput = inputArea.split(' ');
  let resultString = '';

  console.log(arrOfInput)
  
    if (convention == "Camel Case") {
      resultString = arrOfInput[0];

      for (let i = 1; i < arrOfInput.length; i++) {
        resultString += arrOfInput[i][0].toUpperCase() + arrOfInput[i].slice(1, arrOfInput[i].length);
     }

    } else if (convention == 'Pascal Case'){
      for (let i = 0; i < arrOfInput.length; i++) {
        resultString += arrOfInput[i][0].toUpperCase() + arrOfInput[i].slice(1, arrOfInput[1].length);
      }

    } else {
      resultString = 'Error!'
    }

    result.textContent = resultString;


}