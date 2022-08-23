class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
        this.origin = innerString;
    }

    increase(index) {
        this.innerLength += index;
    }

    decrease(index) {
        this.innerLength -= index;
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {;
            this.innerString = this.innerString.substring(0, this.innerLength);

            return `${this.innerString}...`;

        } else if (this.innerString < this.innerLength) {
            for (let i = 0; i < this.innerLength; i++) {
                this.innerString += this.origin[i];
                
            }

            return this.innerString;
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test