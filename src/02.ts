//5
abstract class Car {
    constructor(protected _mileage:number, protected _fuel:number) {}

    abstract drive(kilometers:number):void;
    abstract refuel(count:number):void;
}

class Toyota extends Car {
    protected _fuel:number;
    protected _mileage:number;

    private _consumption:number = 10;

    constructor(mileage:number, fuel:number) {
        super(mileage, fuel);
        this._fuel = fuel;
        this._mileage = mileage;
    }
    public get mileage():number {
        return this._mileage;
    }
    public get fuel():number {
        return this._fuel;
    }
    public drive(kilometers:number):void {
        if (this.fuel > 0) {
            this._mileage += kilometers;
            this._fuel -= kilometers/this._consumption;
        } else {
            throw new Error('Need fuel');
        }
    }
    public refuel(count:number):void {
        this._fuel += count;
    }
}

let toyota = new Toyota(21000, 35);
console.log("5", toyota.mileage);
console.log("5", toyota.fuel);
toyota.drive(300);
console.log("5", toyota.mileage);
console.log("5", toyota.fuel);
toyota.drive(15);
console.log("5", toyota.mileage);
console.log("5", toyota.fuel);
toyota.refuel(10);
console.log("5", toyota.mileage);
console.log("5", toyota.fuel);