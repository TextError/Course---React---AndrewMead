// const squere = function(x) {
//   return x * x
// };

// // const squereArrow = (x) => {
// //   return x * x;
// // };

// const squereArrow = (x) => x * x;  //return single expresion

// console.log(squereArrow(4));

//Challenge
const name = 'Raul Calin Savin'

function middleName(name) {
  return name.split(' ')[1];
}

const getFirstName = (name) => {
  return name.split(' ')[0];
};

const getLastName = (name) => name.split(' ')[2];

console.log(getLastName(name), getFirstName(name), middleName(name));

//arguments object - no longer bound with arrow function

const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

const addArrowFunction = (a, b) => {
  // console.log(arguments);  //Uncaught ReferenceError: arguments is not defined
  return a + b;
}

console.log(addArrowFunction(55, 1));

//this keyword - no longer bound with arrow function

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'NY', 'Dublin', 'London'],
  printPlacesLived() {
    const that = this;
    this.cities.forEach((city) => {
    // this.cities.forEach(function(city) {
      //console.log(this.name + ' has lived in ' + city);  // Cannot read property 'name' of undefined
      // console.log(that.name + ' has lived in ' + city);  //workaround;
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();