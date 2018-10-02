class Person {
  constructor(name = 'Anonymus', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //return 'Hi ' + this.name + '!';
    return `Hi ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
};

const me = new Person('Andrew Mead', 26);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());