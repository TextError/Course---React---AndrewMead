'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
// let nameLet = 'Julie'; Duplicate declaration "nameLet"

console.log('nameLet', nameLet);

var nameConst = 'Frank';
// const nameConst = 'Ghunter'; Duplicate declaration "nameConst"
// nameConst = 'Ghunter' value does not change

console.log('nameConst', nameConst);

//Block scoping

var fullName = 'Andrew Mead';

if (fullName) {
  var _firstName = fullName.split(' ')[0];
  console.log(_firstName);
}

// console.log(firstName);  'Andrew' -- when var --
// console.log(firstName); Uncaught ReferenceError: firstName is not defined -- when const --
// console.log(firstName); Uncaught ReferenceError: firstName is not defined -- when let --

var fullName = 'Andrew Mead';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[1];
  console.log(firstName);
}

console.log(firstName);
