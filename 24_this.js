// JavaScript this Keyword

const fruit = {
  name: "Mango",
  color: "Yellow",
  isSweet: true,
  eat: function ()  {
    console.log(`${this.name}`)
    console.log(`${this.color}`)
    console.log(`${this.isSweet}`)
  },
};

fruit.eat();
