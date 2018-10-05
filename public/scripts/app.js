'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const toggle = () => {
//   if (state === 0) {
//     state++
//   } else {
//     state--
//   }
//   challengeUpdate();
// }

// let state = 0;

// const appRoot = document.getElementById('app');

// const challengeUpdate = () => {
//   const challenge = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>{state === 0 ? 'Show Details' : 'Hide Details'}</button>
//       {state === 0 ? null : <p>Hey, These are some details you can now see!!</p>}
//     </div>
//   );
//   ReactDOM.render(challenge, appRoot);
// };

// challengeUpdate();

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//       {visibility && (
//         <div>
//           <p>Hey, These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();

var ToggleVisible = function (_React$Component) {
  _inherits(ToggleVisible, _React$Component);

  function ToggleVisible(props) {
    _classCallCheck(this, ToggleVisible);

    var _this = _possibleConstructorReturn(this, (ToggleVisible.__proto__ || Object.getPrototypeOf(ToggleVisible)).call(this, props));

    _this.state = {
      toggle: false
    };
    _this.Visibility = _this.Visibility.bind(_this);
    return _this;
  }

  _createClass(ToggleVisible, [{
    key: 'Visibility',
    value: function Visibility() {
      this.setState(function (prevState) {
        return {
          toggle: !prevState.toggle
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var toggle = this.state.toggle;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.Visibility },
          toggle ? 'Hide Details' : 'Show Details'
        ),
        toggle && React.createElement(
          'p',
          null,
          'Hey, These are some details you can now see!'
        )
      );
    }
  }]);

  return ToggleVisible;
}(React.Component);

ReactDOM.render(React.createElement(ToggleVisible, null), document.getElementById('app'));
