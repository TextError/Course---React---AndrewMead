console.log('app.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  option: ['One', 'Two']
}
//JSX  JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.option.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>item two</li>
    </ol>
  </div>
);

// var user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Philadelphia!'
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return undefined;
//   }
// }

//  var templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1> {/*1 or 2 thing*/}
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} {/*Do 1 thing* else nothing*/}
//     {getLocation(user.location)}
//   </div>
// );

let count = 0;

const addOne = () => {
  console.log('clicked')
};

const minusOne = () => {
  console.log('minusOne')
};

const reset = () => {
  console.log('reset')
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

//Challenge



var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);