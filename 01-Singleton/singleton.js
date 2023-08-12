class Singleton {
    constructor() {
        // Singleton logic
        if (Singleton.instance) {
            console.log('Allready existing instance');
            return Singleton.instance;
        }
        console.log('New Singleton instance created');

        Singleton.instance =  this;
    }

    // static getInstance() {
    //     if (Singleton.instance) {
    //         return Singleton.instance;
    //     }

    //     return new Singleton();
    // }
}

// TODO - create Singleton instance

const singleton1 = new Singleton();

const singleton2 = new Singleton();

console.log(singleton1 === singleton2);

// TODO - Singleton Database 

class DataBase {    
    constructor() {
        // DataBase logic
        if (DataBase.instance) {
            console.log('DataBase Allready existing');
            return DataBase.instance;
        }

        // TODO - DataBase simulation

        this.host = 'localhost';
        this.username = 'admin';
        this.password = 'password';
        this.queries = [];


        console.log('New DataBase instance created');

        DataBase.instance = this;
    }

    query(sql) {
        console.log(`Query: ${sql}`);
        this.queries.push(sql);
    }
}

const db1 = new DataBase();
const db2 = new DataBase();

console.log(db1 === db2);

db1.query('SELECT * FROM USERS')
db2.query('UPDATE measurements set cant = 0')

console.log(db1.queries);
console.log(db2.queries);