function attachEventsListeners() {
    const btn = document.getElementById('convert');
    const input = document.getElementById('inputDistance');
    const output = document.getElementById('outputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');

    let table = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254,
    }

    btn.addEventListener('click', operations);

    function operations() {
        let inputValue = inputUnits.value;
        let outputValue = outputUnits.value;

        let valueElement = input.value * table[inputValue];
        let coverted = valueElement / table[outputValue];

        output.value = coverted;

    }


}