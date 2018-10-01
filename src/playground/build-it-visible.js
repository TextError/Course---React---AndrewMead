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

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
      {visibility && (
        <div>
          <p>Hey, These are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};

render();