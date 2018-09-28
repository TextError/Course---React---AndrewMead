var nameVar = 'Andrew';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
// let nameLet = 'Julie'; Duplicate declaration "nameLet"

console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Ghunter'; Duplicate declaration "nameConst"
// nameConst = 'Ghunter' value does not change

console.log('nameConst', nameConst);

//Block scoping

var fullName = 'Andrew Mead';

if(fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

// console.log(firstName);  'Andrew' -- when var --
// console.log(firstName); Uncaught ReferenceError: firstName is not defined -- when const --
// console.log(firstName); Uncaught ReferenceError: firstName is not defined -- when let --

var fullName = 'Andrew Mead';
let firstName;

if(fullName) {
  firstName = fullName.split(' ')[1];
  console.log(firstName);
}

console.log(firstName);