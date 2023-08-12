class Car {
  constructor(builder) {
    this.make = builder.make;
    this.model = builder.model;
    this.year = builder.year;
    this.colors = builder.colors;
  }
  getInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Colors: ${this.colors}`;
  }
}
class CarBuilder {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.colors = [];
  }
  setYear(year) {
    this.year = year;
    return this;
  }
  setColor(color) {
    this.colors.push(color);
    return this;
  }
  build() {
    return new Car(this);
  }
}
// Usage example:
const myCar = new CarBuilder("Ford", "Mustang")
  .setYear(2022)
  .setColor("Red")
  .setColor("Blue")
  .build();
console.log(myCar.getInfo()); // Output: Make: Ford, Model: Mustang, Year: 2022, Color: Red
