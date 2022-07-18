function toggle() {
   const btn = document.getElementsByClassName('button')[0];
   const extraText = document.getElementById('extra');

   btn.addEventListener('click', operations());

   function operations() {
       if (btn.textContent == 'More') {
           extraText.style.display = 'block';
           btn.textContent = 'Less';
       } else {
            extraText.style.display = 'none';
            btn.textContent = 'More';

       }
   }
     
}