function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    const optionsElement = document.createElement('option');

    optionsElement.textContent = inputText.value;
    optionsElement.value = inputValue.value;
    menu.appendChild(optionsElement);

    inputText.value = ''
    inputValue.value = ''
}