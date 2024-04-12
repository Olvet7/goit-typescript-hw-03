class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random()
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[]

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`${person.getKey().getSignature()} вертається додому`);
        } else {
            console.log('Двері зачинені, спробуйте пізніше');
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()){
            this.door = true;
        } else {
            console.log('Ключ не вірний');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};