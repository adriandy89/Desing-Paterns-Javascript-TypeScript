class Person {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    getInfo(): string {
        return `Person name ${this.name}`;
    }
}

const person1 = new Person('Pepe');
console.log(person1.getInfo());

class Drink {
    constructor(public name: string) {}

    info() {
        return `Name: ${this.name}`;
    }
}

class Beer extends Drink {
    constructor(name: string, public alcohol: number) {
        super(name)
        this.alcohol = alcohol;
    }

    info() {        
        return `${super.info()}, Alcohol %: , ${this.alcohol}`;
    }
}

const beer1 = new Beer('BeerName', 5.6);
console.log(beer1.info());

interface Animal {
    emitSound(): void;
    getInfo(): string;
}

class Dog implements Animal {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    emitSound(): void {
        console.log('Gof!');
    }

    getInfo(): string {
        return `Dog name: ${this.name}, age: ${this.age}`;
    }
}

class Cat implements Animal {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    emitSound(): void {
        console.log('Meow!');
    }

    getInfo(): string {
        return `Cat name: ${this.name}, age: ${this.age}`;
    }
}

const animals: Animal[] = [
    new Dog('Dogy', 5),
    new Cat('Garfield', 4)
];

for (const animal of animals) {
    animal.emitSound();
    console.log(animal.getInfo());
}