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
}

var appRoot = document.getElementById('app');

const renderOption = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.option.length}</p>
      <ol>
        <li>Item one</li>
        <li>item two</li>
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