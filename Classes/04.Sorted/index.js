class List {
    constructor(arr) {
        this.arr = [];
        this.size = this.arr.length;
    }

    add(param) {
        this.arr.push(param);
        this.arr.sort((a,b) => a - b)
        this.size += 1;
    }

    get(param) {
        return this.arr[param];
    }

    remove(param) {
        this.arr.splice(param, 1);
        this.arr.sort((a,b) => a - b)
        this.size -= 1;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size)
console.log(list.arr)
list.add(3)
list.add(9)
list.add(11)
list.add(2)
console.log(list.size);