function create(words) {
   const allDivelements = document.getElementById('content');

   for (const el of words) {
      let par = document.createElement('p');
      par.style.display = 'none'
      par.textContent = el;

      let divElement = document.createElement('div');
      divElement.addEventListener('click', function eventOpr() {
         divElement.firstChild.style.display = 'block'
      });

      divElement.appendChild(par);
      allDivelements.appendChild(divElement);
   }

   
}