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
