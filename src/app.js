console.log('app.js is running!');

//JSX  JavaScript XML
var template = (
  <div>
    <h1>React course</h1>
    <p>This is JSX from app.js!</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);