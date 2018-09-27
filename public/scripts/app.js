'use strict';

console.log('app.js is running!');

var user = {
  name: 'Raul',
  age: '34',
  location: 'Reading'
  //JSX  JavaScript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var userName = 'Andrew Mead';
var userAge = 27;
var userLocation = 'Philadelphia';

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName.toUpperCase() + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    userAge
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userLocation
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
