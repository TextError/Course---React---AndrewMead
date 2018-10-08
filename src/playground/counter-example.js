// let count = 0;

// const addOne = () => {
//   count++;   // count = count + 1;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// var appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    try {
      const json = parseInt(localStorage.count, 10);
      if(!isNaN(json)) {
        this.setState(() => ({ count: json }));
        console.log('localStorage is: ', localStorage.count);
      }
    } catch(e) {
      //Do nothing
      console.log('error')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  };

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  };

  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));