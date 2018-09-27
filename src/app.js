console.log('app.js is running!');

var user = {
  name: 'Raul',
  age: '34',
  location: 'Reading'
}
//JSX  JavaScript XML
var template = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var userName= 'Andrew Mead';
var userAge= 27;
var userLocation= 'Philadelphia'

 var templateTwo = (
  <div>
    <h1>{userName.toUpperCase() + '!'}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);