class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    priceWithVat(): number{
        return this.price * 1.23;
    }
}

const product = new Product("Teclado", 45.50);

export{}