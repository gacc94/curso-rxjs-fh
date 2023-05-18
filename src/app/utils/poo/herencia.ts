
class Animal {

    protected name!: string;
    protected age!: number;
    private paw!: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hola mi nombre es: ${this.name}`
    }

}

class Dog extends Animal {

    private readonly cola?: number;

    constructor(name: string, age: number) {
        super(name, age);
    }

    getCountColas(): string{
        const value = this.age;
        super.greet();
        return `${this.cola} - Edad: ${this.age} ${this.name}`;
    }

    override greet(): string {
        return ``;
    }

}

const fido: Dog = new Dog('fido', 2);
console.log(fido.greet());
console.log(`Cantidad de colas: `+ fido.getCountColas());
