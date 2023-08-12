// TODO - class

class Drink {
    constructor(name) {
        this.name = name;
    }

    info() {
        console.log('Name: ', this.name);
    }
}

// const drink1 = new Drink('Pepe');

// console.log('drink1.info(): ', drink1.info());

class Beer extends Drink {
    constructor(name, alcohol) {
        super(name)
        this.alcohol = alcohol;
    }

    info() {
        super.info();
        console.log('Alcohol %: ', this.alcohol);
    }
}

const beer = new Beer('BeerName', 5.6);
 beer.info();