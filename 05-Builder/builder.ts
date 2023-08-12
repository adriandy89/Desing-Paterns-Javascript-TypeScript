interface IProduct {
  name: string;
  price: number;
  quantity: number;
}
interface IProductBuilder {
  setName(name: string): IProductBuilder;
  setPrice(price: number): IProductBuilder;
  setQuantity(quantity: number): IProductBuilder;
  build(): IProduct;
}
class ProductBuilder implements IProductBuilder {
  private name: string = "";
  private price: number = 0;
  private quantity: number = 0;

  setName(name: string): ProductBuilder {
    this.name = name;
    return this;
  }

  setPrice(price: number): ProductBuilder {
    this.price = price;
    return this;
  }

  setQuantity(quantity: number): ProductBuilder {
    this.quantity = quantity;
    return this;
  }

  build(): IProduct {
    return {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    };
  }
}

// Usage example:
const product = new ProductBuilder()
  .setName("Example Product")
  .setPrice(10.99)
  .setQuantity(5)
  .build();

console.log(product);
