

class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: number = 0,
    ) {  }

    isProductReady(): boolean {
        for (const key in this) {
            switch ( typeof this[key]) {
                case 'string':
                    if ( this[key] <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ( this[key] <= 0) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is zero`);
            }
        }

        return true;
    }

    toString() {

        if ( !this.isProductReady() ) return;

        return `${ this.name } (${this.price}) `
    }

}

(()=>{

    const bluePants = new Product('Blue Large Pants');
    console.log(bluePants);
    console.log(bluePants.toString());


})()

