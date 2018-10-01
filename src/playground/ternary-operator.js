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