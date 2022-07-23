function encodeAndDecodeMessages() {
    const [encode, decode] = Array.from(document.querySelectorAll('textarea'));
    const main = document.getElementById('main');

    main.addEventListener('click', operations);

    function operations(e) {
        if (e.target.textContent === 'Encode and send it') {
            encoded();

        } else if (e.target.textContent === 'Decode and read it') {
            decoded();
        }

    }

    function encoded() {
        let str = '';

        for (const el of encode.value) {
            let newCode = el.charCodeAt() + 1;
            let newLetter = String.fromCharCode(newCode);
            str += newLetter;

        }

        decode.value = str
        encode.value = ''
    }

    function decoded() {
        let str = '';

        for (const el of decode.value) {
            let newCode = el.charCodeAt() - 1;
            let newLetter = String.fromCharCode(newCode);
            str += newLetter;

        }

        decode.value = str
    }


}