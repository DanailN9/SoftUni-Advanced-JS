function notify(message) {
  const divElement = document.getElementById('notification');
  divElement.textContent = message
  divElement.style.display = 'block'
}