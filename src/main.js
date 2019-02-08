import React from 'react';
import { render } from 'react-dom';

import Component from './component';
import ComponentAnother from './componentAnother';

import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state1: ''
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    console.log('yoo ma');
  }
  render() {
    return (
      <div>

        <Component></Component>
        <ComponentAnother></ComponentAnother>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);

export default hot(module)(App)