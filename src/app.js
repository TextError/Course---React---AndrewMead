class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing tree', 'Thing four']
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
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

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option allready exists'
    }

    const {options} = this.state;
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  };

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
        <AddOption handleAddOption={this.handleAddOption}/>
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
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const inputText = e.target.elements.textInput.value.trim();
    const error = this.props.handleAddOption(inputText);

    this.setState(() => {
      return { error };
    });
  };

  render() {
    return(
      <div>
        {this.state.error && (<p>{this.state.error}</p>)}
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