var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  option: []
}
//JSX  JavaScript XML
const onFormSubmit = (e) => {
  e.preventDefault();

  const formValue = e.target.elements.option.value;

  if (formValue) {
    app.option.push(formValue);
    e.target.elements.option.value = '';
    renderOption();
  }
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.option.length);
  const option = app.option[randomNumber];
  alert(option);
}

const remove = () => {
  app.option =  [];
  renderOption();
}

var appRoot = document.getElementById('app');

const renderOption = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.option.length > 0 ? false : true} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={remove}>Remove Options</button>
      <ol>
        {
          app.option.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

renderOption();