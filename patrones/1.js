const func = (a, b) => {
    return a+b;
}

const result = func(3, 4);
console.log(result);

function operation(a,b,fn) {
    console.log('Operation Function...');
    let res = fn(a,b);
    console.log(res);
}

operation(10,20,func)
operation(10,20,(x, y) => x*y)

let numbers = [1,2,3,4,5];
let initValue = 0;

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initValue);
console.log('Sum: ', sum);

// TODO - class

class Drink {
    constructor(name) {
        this.name = name;
    }

    info() {
        return this.name;
    }
}

const drink1 = new Drink('Pepe');

console.log('drink1.info(): ', drink1.info());

// TODO - function objects

function myDrink(name) {
        this.name = name;

        this.info = function () {
            return this.name;
        }
}

const drink2 = new myDrink('Pepe2');

console.log('drink2.info(): ', drink2.info());
