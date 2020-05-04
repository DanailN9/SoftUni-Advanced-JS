function solve() {
   let input = document.getElementById('chat_input');
   let button = document.getElementById('send');
   let output = document.getElementById('chat_messages');
   
   
   button.addEventListener('click', () => {
      let div = document.createElement('div');
      div.innerHTML = input.value;
      div.classList.add('message', 'my-message');
      output.appendChild(div);

      input.value = '';

   })
}


