function calculator() {
    //const numOne = document.getElementById('num1').value;
    //const numTwo = document.getElementById('num2').value;
    //const result = document.getElementById('result');

    let obj = {

        init: function (first, second, result) {
            this.first = document.getElementById('num1').value;
            this.second = document.getElementById('num2').value;
            this.result = document.getElementById('result');

        },

        add: function () {
           result.value = Number(this.first) + Number(this.second);
           console.log(this.first)
           return this.result
        },

        subtract: function () {
            result.value = Number(this.second) - Number(this.first);
            return this.result
        }

    }
    
    return obj
    
}

const numOne = document.getElementById('num1').value;
const numTwo = document.getElementById('num2').value;
const result = document.getElementById('result');

const calculate = calculator ();
calculate.init (numOne, numTwo, result);




