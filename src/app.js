class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const option = JSON.parse(json);
      
      if (option) {
        this.setState(() => ({ options: option }));
      }
    } catch(e) {
      //Do nothing!
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });

    this.setState(() => ({ options: [] }))
  };

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove )
    }))
  }

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
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option)
    //   };
    // });

    this.setState((prevState) => ({ options: prevState.options.concat(option)}));
  };

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOption={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision App'
};

// class Header extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return(
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOption}
      >
      What should I do?!?
      </button>
    </div>
  );
};

// class Action extends React.Component {

//   // handlePick() {
//   //   alert('handle click')
//   // };

//   render() {
//     return(
//       <div>
//         <button 
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOption}
//         >
//         What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option  
            option={option} 
            key={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
}

// class Options extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   // }

//   // handleRemoveAll() {
//   //   alert(this.props.options)
//   // };

//   render() {
//     return(
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option option={option} key={option}/>)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return(
    <div>
      <p>
      {props.option}
        <span> 
          <button 
            onClick={(e) => {
              props.handleDeleteOption(props.option);
            }}
          >Remove
          </button>
        </span>
      </p>
    </div>
  );
}

// class Option extends React.Component {
//   render() {
//     return(
//       <div>
//         <p>{this.props.option}</p>
//       </div>
//     );
//   }
// }

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

    // this.setState(() => {
    //   return { error };
    // });
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.textInput.value = '';
    }

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

// const User  = (props) => {
//   return(
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp options={['Thing one', 'Thing two', 'Thing tree', 'Thing four']} />, document.getElementById('app'));

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch