'use strict';

// const squere = function(x) {
//   return x * x
// };

// // const squereArrow = (x) => {
// //   return x * x;
// // };

// const squereArrow = (x) => x * x;  //return single expresion

// console.log(squereArrow(4));

//Challenge
var name = 'Raul Calin Savin';

function middleName(name) {
  return name.split(' ')[1];
}

var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};

var getLastName = function getLastName(name) {
  return name.split(' ')[2];
};

console.log(getLastName(name), getFirstName(name), middleName(name));

//arguments object - no longer bound with arrow function

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

var addArrowFunction = function addArrowFunction(a, b) {
  // console.log(arguments);  //Uncaught ReferenceError: arguments is not defined
  return a + b;
};

console.log(addArrowFunction(55, 1));

//this keyword - no longer bound with arrow function

var user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'NY', 'Dublin', 'London'],
  citiesVisited: ['Paris', 'Rome'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    var that = this;
    this.cities.forEach(function (city) {
      // this.cities.forEach(function(city) {
      //console.log(this.name + ' has lived in ' + city);  // Cannot read property 'name' of undefined
      // console.log(that.name + ' has lived in ' + city);  //workaround;
      console.log(_this.name + ' has lived in ' + city);
    });
  },
  printPlaceVisited: function printPlaceVisited() {
    var _this2 = this;

    var citiesvisited = this.citiesVisited.map(function (city) {
      return _this2.name + ' has visited ' + city;
    });
    return citiesvisited;
  }
};

user.printPlacesLived();

console.log(user.printPlaceVisited());
