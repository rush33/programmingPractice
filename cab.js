const person1 = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

person1.greet.call(person1, "Hello"); // Output: Hello, John!

const person2 = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

person2.greet.apply(person2, ["Hello"]); // Output: Hello, John!

const person3 = {
  name: "John",
  greet: function (message) {[]
    console.log(`${message}, ${this.name}!`);
  },
};

person3.greet.apply(person3, ["Hello"]); // Output: Hello, John!
