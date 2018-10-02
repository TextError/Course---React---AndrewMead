class Person {
  constructor(name = 'Anonymus') {
    this.name = name;
  }
  getGreeting() {
    //return 'Hi ' + this.name + '!';
    return `Hi ${this.name}!`
  }
};

const me = new Person('Andrew Mead');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());