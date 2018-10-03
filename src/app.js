class IndecisionApp extends React.Component {
  render() {
    const subtitle = 'Put your life in the hands of a computer'
    return(
      <div>
        <Header title='Indecision App' subtitle={subtitle}/>
        <Action />
        <Options />
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
  render() {
    return(
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return(
      <div>
        <p>Add Options</p>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        <p>Option</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return(
      <div>
        <p>AddOption Component here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch