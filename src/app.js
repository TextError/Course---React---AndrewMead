class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer</h2>
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

class Option extends React.Component {
  render() {
    return(
      <div>
        <li>option Component here</li>
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

const jxs = (
  <div>
    <Header />
    <Action />
    <Option />
    <AddOption />
  </div>
)

ReactDOM.render(jxs, document.getElementById('app'));