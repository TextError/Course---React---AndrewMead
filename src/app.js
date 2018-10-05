class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing tree', 'Thing four']
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handlePick() {
    const randomOption = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomOption]);
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title='Indecision App' subtitle={subtitle} />
        <Action 
          hasOption={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {

  // handlePick() {
  //   alert('handle click')
  // };

  render() {
    return(
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOption}
        >
        What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }

  // handleRemoveAll() {
  //   alert(this.props.options)
  // };

  render() {
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option option={option} key={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.option}</p>
      </div>
    );
  }
}

class AddOption extends React.Component {

  handleSubmit(e) {
    e.preventDefault();

    const inputText = e.target.elements.textInput.value.trim();
    if(inputText) {
      alert(inputText);
    }

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='textInput' />
          <button type='Submit'>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch