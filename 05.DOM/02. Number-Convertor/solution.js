function solve() {
    let input = document.getElementById('input');
    let selectMenu = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexaOption = document.createElement('option');

    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    selectMenu.appendChild(binaryOption);

    hexaOption.textContent = 'Hexadecimal';
    hexaOption.value = 'hexadecimal';
    selectMenu.appendChild(hexaOption)

    let result = document.getElementById('result');

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', () => {
        
        if (selectMenu.value === 'binary') {
            result.value = convertToBinary(input.value);
        } else if (selectMenu.value === 'hexadecimal') {
            result.value = convertToHexa(input.value);
        }
    })

    function convertToBinary(num) {
        return (num >>> 0).toString(2);
    }

    function convertToHexa(num) {
        num = Number(num);
        return num.toString(16).toUpperCase();
    }


}