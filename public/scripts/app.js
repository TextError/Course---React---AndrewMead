'use strict';

console.log('app.js is running!');

//JSX  JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'React course'
  ),
  React.createElement(
    'p',
    null,
    'This is JSX from app.js!'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
