'use strict';

// const toggle = () => {
//   if (state === 0) {
//     state++
//   } else {
//     state--
//   }
//   challengeUpdate();
// }

// let state = 0;

// const appRoot = document.getElementById('app');

// const challengeUpdate = () => {
//   const challenge = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>{state === 0 ? 'Show Details' : 'Hide Details'}</button>
//       {state === 0 ? null : <p>Hey, These are some details you can now see!!</p>}
//     </div>
//   );
//   ReactDOM.render(challenge, appRoot);
// };

// challengeUpdate();

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey, These are some details you can now see!'
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
