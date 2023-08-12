class Singleton {
    private static instance: Singleton; // TODO
    private _data: string;
    
    constructor() {
        this._data = 'Initial Data';
    }

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();            
        }
        return Singleton.instance;
    }

    public get data(): string {
        return this._data;
    }
    public set data(value: string) {
        this._data = value;
    }

}

const singleton1 = Singleton.getInstance();
console.log(singleton1.data);
const singleton2 = Singleton.getInstance();

singleton1.data = 'Updated Data';
console.log(singleton2.data);
console.log(singleton1.data);

