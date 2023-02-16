class Car {
  constructor({name, model, color}) {
    this.name = name;
    this.model = model;
    this.color = color;
  }

  getInfo() {
    console.log(`The ${this.name} ${this.name} with ${this.model} is wonderfull!`);
  }
}
const data = {
  name: "BMW",
  model: 2011,
  color: 'red',
}

const bmw = new Car(data)

bmw.getInfo()
bmw.getInfo()
bmw.getInfo()
