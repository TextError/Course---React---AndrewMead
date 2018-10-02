class Person {
  constructor(name = 'Anonymus') {
    this.name = name;
  }
};

const me = new Person('Andrew Mead');
console.log(me);

const other = new Person();
console.log(other);