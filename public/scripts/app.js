'use strict';

var toggle = function toggle() {
  if (state === 0) {
    state++;
  } else {
    state--;
  }
  challengeUpdate();
};

var state = 0;

var appRoot = document.getElementById('app');

var challengeUpdate = function challengeUpdate() {
  var challenge = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      state === 0 ? 'Show Details' : 'Hide Details'
    ),
    state === 0 ? null : React.createElement(
      'p',
      null,
      'Hey, These are some details you can now see!!'
    )
  );
  ReactDOM.render(challenge, appRoot);
};

challengeUpdate();
