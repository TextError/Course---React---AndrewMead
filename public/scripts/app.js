'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  option: []
  //JSX  JavaScript XML
};var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var formValue = e.target.elements.option.value;

  if (formValue) {
    app.option.push(formValue);
    e.target.elements.option.value = '';
    renderOption();
  }
};

var remove = function remove() {
  app.option = [];
  renderOption();
};

var appRoot = document.getElementById('app');

var renderOption = function renderOption() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.option.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.option.length
    ),
    React.createElement(
      'button',
      { onClick: remove },
      'Remove Options'
    ),
    React.createElement(
      'ol',
      null,
      app.option.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderOption();
