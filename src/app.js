console.log('app.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
}
//JSX  JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia!'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}

 var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1> {/*1 or 2 thing*/}
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} {/*Do 1 thing* else nothing*/}
    {getLocation(user.location)}
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);